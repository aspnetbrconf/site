using System;
using System.Configuration;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;
using EventoAspNetBr.model;

namespace EventoAspNetBr.api
{
    public class ContactController : ApiController
    {
        private readonly AspNetBrContext _context;

        public ContactController()
        {
            _context = new AspNetBrContext();
        }

        public async Task<dynamic> Post(Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();

                await sendEmail(contact);

                return new { success = true, data = contact };
            }
            catch (Exception e)
            {
                return new { success = false, error = e };
            }
        }

        private Task sendEmail(Contact contact)
        {
            var mailMessage = new MailMessage
            {
                Body = contact.Message,
                From = new MailAddress(contact.Email, contact.Name),
                Subject = "Contato ASP.NET Brasil Conference"
            };

            mailMessage.To.Add(ConfigurationManager.AppSettings["site:emailTo"]);

            var smtp = new SmtpClient();
            return smtp.SendMailAsync(mailMessage);
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }
    }
}