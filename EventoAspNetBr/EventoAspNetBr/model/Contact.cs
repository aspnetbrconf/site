using System;

namespace EventoAspNetBr.model
{
    public class Contact
    {
        public Contact()
        {
            this.SentIn = DateTime.Now;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public DateTime SentIn { get; set; }
    }
}