namespace FullStack.API.models;

public class Products
{
	public Guid Id { get; set; }
	public string title { get; set; }
    public string category { get; set; }
    public int price { get; set; }
}
