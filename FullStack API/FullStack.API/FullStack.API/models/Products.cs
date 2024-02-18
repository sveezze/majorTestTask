using System.ComponentModel.DataAnnotations;

namespace FullStack.API.models;

public class Products
{
	public string title { get; set; }
	public string price { get; set; }
    public string UOM { get; set; }
    public string priceForSale { get; set; }
}
