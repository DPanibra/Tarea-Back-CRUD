using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BikeStore.Auth
{
   public class Register
   {
      [Required]
      [EmailAddress]
      public string email { get; set; }
      [Required]
      public string password { get; set; }
   }
}
