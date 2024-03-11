using FullStack.API.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductStoreController : Controller
    {
        private readonly IConfiguration _configuration;

        public ProductStoreController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("[action]")]
        public async Task<List<Products>> GetProductsWithSale()
        {
            string connectionString = _configuration.GetConnectionString("FullStackConnectionString");
            string query = "SELECT P.title, P.price, P.UOM, S.priceForSale FROM Products P LEFT JOIN Sale S ON P.id1 = S.id1";
            var result = new DataTable();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 3000;
                    SqlDataAdapter da = new SqlDataAdapter(command);

                    da.Fill(result);
                }
                connection.Close();
            }
            var data = result.AsEnumerable().Select(x => new Products()
            {
                title = x["title"].ToString(),
                price = x["price"].ToString(),
                UOM = x["UOM"].ToString(),
                priceForSale = x["priceForSale"].ToString()
            }).ToList();
            return data;
        }
        [HttpGet("[action]")]
        public async Task<List<Products2Buy>> GetProductsToBuy()
        {

            string connectionString = _configuration.GetConnectionString("FullStackConnectionString");
            string query = "SELECT TOP (1000) [id5], [productsToBuy], [priceOfP2B], [amount] FROM [mireaDbTask].[dbo].[Products2Buy]";
            var result = new DataTable();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 3000;
                    SqlDataAdapter da = new SqlDataAdapter(command);

                    da.Fill(result);
                }
                connection.Close();
            }
            var data = result.AsEnumerable().Select(x => new Products2Buy()
            {
                productsToBuy = x["productsToBuy"].ToString(),
                priceOfP2B = (int)x["priceOfP2B"],
                amount = (int)x["amount"]
            }).ToList();
            return data;
        }
        [HttpGet("[action]")]
        public async Task<List<RequestModel>> GetRequestProducts()
        {

            string connectionString = _configuration.GetConnectionString("FullStackConnectionString");
            string query = "SELECT TOP (1000) [requestDate], [adress], R.[amount], P2b.productsToBuy FROM [mireaDbTask].[dbo].[Request] R left join Products2Buy P2b on P2b.id5 = R.id5";
            var result = new DataTable();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 3000;
                    SqlDataAdapter da = new SqlDataAdapter(command);

                    da.Fill(result);
                }
                connection.Close();
            }
            var data = result.AsEnumerable().Select(x => new RequestModel()
            {
                requestDate = (DateTime)x["requestDate"],
                amount = (int)x["amount"],
                adress = (string)x["adress"],
                productsToBuy = (string)x["productsToBuy"]
            }).ToList();
            return data;
        }
        [HttpGet("[action]")]
        public async Task<DataTable> BuyProductsForWO(string amount)
        {
            string connectionString = _configuration.GetConnectionString("FullStackConnectionString");
            string query = "update [mireaDbTask].[dbo].[Products2Buy] set amount = prevAmount - " + amount + " update [mireaDbTask].[dbo].[Products2Buy] set prevAmount = amount";
            var result = new DataTable();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 3000;
                    SqlDataAdapter da = new SqlDataAdapter(command);

                    da.Fill(result);
                }
                connection.Close();
            }
            return result;
        }

    }
}
