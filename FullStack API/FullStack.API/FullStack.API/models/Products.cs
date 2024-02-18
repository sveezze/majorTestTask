using System.ComponentModel.DataAnnotations;

namespace FullStack.API.models;

public class Products
{
    [Key]
	public int id1 { get; set; }
	public string title { get; set; }
    public string category { get; set; }
    public int price { get; set; }
    public string UOM { get; set; }
}
