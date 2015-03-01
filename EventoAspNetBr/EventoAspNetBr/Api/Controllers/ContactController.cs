using System;
using System.Configuration;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;
using EventoAspNetBr.Api.ViewModel;

namespace EventoAspNetBr.Api.Controllers
{
    public class ContactController : ApiController
    {

        public async Task<dynamic> Post(ContactViewModel contact)
        {
            try
            {
                await sendEmail(contact);

                return new { success = true, data = contact };
            }
            catch (Exception e)
            {
                return new { success = false, error = e };
            }
        }

        private Task sendEmail(ContactViewModel contact)
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

    }
}