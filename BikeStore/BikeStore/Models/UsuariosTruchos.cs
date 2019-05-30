using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BikeStore.Models
{
    public class UsuariosTruchos
    {
        public int ID { get; set; }
        public string email { get; set; }
        public byte[] imagen { get; set; }

        // public virtual IdentityUser UserID { get; set; }
    }
}
