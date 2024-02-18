﻿using FullStack.API.models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
