namespace FullStack.API.models
{
    public class Videocard
    {
        public Guid Id { get; set; }
        public Guid producerId { get; set; }
        public string model { get; set; }
        public decimal price { get; set; }
    }
}
