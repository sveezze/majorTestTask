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
    }
}
