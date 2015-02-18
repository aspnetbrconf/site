using System.Data.Entity;

namespace EventoAspNetBr.model
{
    public class AspNetBrContext : DbContext
    {
        public DbSet<Communication> Communications { get; set; }
        public DbSet<Contact> Contacts { get; set; }

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


            modelBuilder.Entity<Contact>()
               .ToTable("tb_contact");

            modelBuilder.Entity<Contact>()
                .Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<Contact>()
                .Property(x => x.Email)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<Contact>()
                .Property(x => x.Message)
                .IsRequired();

            base.OnModelCreating(modelBuilder);
        }
    }
}