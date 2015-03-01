using System.Data.Entity;

namespace EventoAspNetBr.Api.Model
{
    public class AspNetBrContext : DbContext
    {
        public DbSet<Communication> Communications { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Communication>()
                .ToTable("tb_communication");

            modelBuilder.Entity<Communication>()
                .Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<Communication>()
                .Property(x => x.Email)
                .HasMaxLength(100)
                .IsRequired();

            base.OnModelCreating(modelBuilder);
        }
    }
}