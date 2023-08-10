using FullStack.API.models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Videocard> Videocards { get; set; }
        public DbSet<Producer> Producers { get; set; }
    }
}
