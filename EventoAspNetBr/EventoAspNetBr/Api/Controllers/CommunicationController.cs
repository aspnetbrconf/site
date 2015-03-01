using System;
using System.Web.Http;
using EventoAspNetBr.Api.Model;

namespace EventoAspNetBr.Api.Controllers
{
    public class CommunicationController : ApiController
    {
        private readonly AspNetBrContext _context;

        public CommunicationController()
        {
            _context = new AspNetBrContext();
        }

        public dynamic Post(Communication communication)
        {
            try
            {
                _context.Communications.Add(communication);
                _context.SaveChanges();

                return new {success = true, data = communication};
            }
            catch (Exception e)
            {
                return new { success = false, error = e };   
            }
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }
    }
}
