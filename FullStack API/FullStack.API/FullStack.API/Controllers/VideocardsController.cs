using FullStack.API.Data;
using FullStack.API.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideocardsController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public VideocardsController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllVideocards()
        {
            var videocards = await _fullStackDbContext.Videocards.ToListAsync();

            return Ok(videocards);
        }



        [HttpPost]
        public async Task<IActionResult> AddVideocard([FromBody] Videocard videocardRequest)
        {
            videocardRequest.Id = Guid.NewGuid();

            await _fullStackDbContext.Videocards.AddAsync(videocardRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(videocardRequest);
        }
        
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetVideocard([FromRoute]Guid id)
        {
            var videocard =
                await _fullStackDbContext.Videocards.FirstOrDefaultAsync(x => x.Id == id);
            if (videocard == null)
            {
                return NotFound();
            }
            return Ok(videocard);
        }
        
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateVideocard([FromRoute] Guid id,  Videocard updateVideocardRequest)
        {
            var videocard = await _fullStackDbContext.Videocards.FindAsync(id);

            if (videocard == null)
            {
                return NotFound();
            }
            videocard.producerId = updateVideocardRequest.producerId;
            videocard.model = updateVideocardRequest.model;
            videocard.price = updateVideocardRequest.price;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(videocard);

        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteVideocard([FromRoute] Guid id)
        {
            var videocard = await _fullStackDbContext.Videocards.FindAsync(id);

            if (videocard == null)
            {
                return NotFound();
            }
            _fullStackDbContext.Videocards.Remove(videocard);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(videocard);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> PostProducer([FromBody] Producer producerPost)
        {
            producerPost.Id = Guid.NewGuid();
            await _fullStackDbContext.Producers.AddAsync(producerPost);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(producerPost);
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetProducers()
        {
            var producers = await _fullStackDbContext.Producers.ToListAsync();
            return Ok(producers);
        }
        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> DeleteProducer([FromRoute] Guid id)
        {
            var producerId = await _fullStackDbContext.Producers.FirstOrDefaultAsync(x => x.Id == id);
            if (producerId == null)
            {
                return NotFound();
            }
            _fullStackDbContext.Producers.Remove(producerId);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(producerId);
        }
    }
}
