using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BikeStore.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BikeStore.Controllers
{
   [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly BikeStoresContext context;

        public CustomersController(BikeStoresContext context)
        {
            this.context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Customers>> Get()
        {
            var customer = context.Customers;
            return Ok(customer);
        }

        // GET api/<controller>/5
        [HttpGet("{id}",Name ="getCustomer")]
        public ActionResult Get(int id)
        {
            var customer = context.Customers.Find(id);
            if (customer == null)
                return BadRequest(id);
            return Ok(customer);
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult InsertCustomer([FromBody] Customers cliente)
        {
            context.Add(cliente);
            context.SaveChanges();
            return new CreatedAtRouteResult("getCustomer", new { id = cliente.CustomerId}, cliente);

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Customers cliente)
        {
            var customer = context.Customers.Find(id);
            if (customer == null)
                return BadRequest(id);
            else
            {
                context.Customers.Update(customer);
                context.SaveChanges();
                return Ok(new
                {
                    message = "Ok",
                    content = "Usuario Modificado"
                });
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var customer = context.Customers.Find(id);
            if (customer == null)
                return BadRequest(id);
            else
            {
                context.Customers.Remove(customer);
                context.SaveChanges();
                return Ok(new {
                    message="Ok",
                    content="Usuario Eliminado"
                });
            }
            
            
        }
    }
}
