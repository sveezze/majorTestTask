namespace FullStack.API.models
{
    public class Videocard
    {
        public Guid Id { get; set; }
        public string producer { get; set; }
        public string model { get; set; }
        public decimal price { get; set; }
    }
}
