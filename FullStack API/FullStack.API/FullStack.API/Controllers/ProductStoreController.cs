using FullStack.API.Data;
using FullStack.API.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductStoreController : Controller
    {
        private readonly FullStackDbContext db;

        public ProductStoreController(FullStackDbContext fullStackDbContext)
        {
            db = fullStackDbContext;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await db.Products.FromSqlRaw("SELECT TOP (1000) [id1],[title]," +
                "[category]," +
                "[price]," +
                "[UOM]" +
                "FROM [mireaDbTask].[dbo].[Products]").ToListAsync();

            return Ok(products);
        }
    }
}
