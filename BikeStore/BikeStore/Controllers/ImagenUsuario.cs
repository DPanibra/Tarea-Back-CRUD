using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BikeStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BikeStore.Controllers
{
    public class ImagenUsuario : ControllerBase
    {
        private readonly BikeStoresContext context;

        public ImagenUsuario(BikeStoresContext context)
        {
            this.context = context;
        }
        [Route("validar")]
        // GET api/<controller>/5
        [HttpGet("{email}", Name = "getVendedor")]
        public ActionResult Get(string email)
        {
            // select * from usuariosTruchos where email= string(email)
            var customer = context.UsuariosTruchos.Where(x=>x.email==email).SingleOrDefault();
            if (customer == null || email == "" || email == null)
                return BadRequest();
            return Ok(customer);
        }

        // POST api/values
        [HttpPost]
        [Route("subirImg")]
        public async Task<ActionResult> Post(IFormFile image, string email)
        {
            // Validar si el usuario existe en la BD modificar su imagen
            // si no existe, crear usuario

            UsuariosTruchos usuario = new UsuariosTruchos
            {
                email = email
            };
            using (var memoryStream = new MemoryStream())
            {
                await image.CopyToAsync(memoryStream);
                usuario.imagen = memoryStream.ToArray();
            }
            await context.UsuariosTruchos.AddAsync(usuario);
            await context.SaveChangesAsync();
            return Ok(usuario);
        }
    }
}
