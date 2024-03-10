namespace FullStack.API.models
{
    public class RequestModel
    {
        public DateTime requestDate { get; set; }
        public string adress { get; set; }
        public int amount { get; set; }
        public string productsToBuy { get; set; }
    }
}
