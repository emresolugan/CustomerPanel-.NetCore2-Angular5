using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Common;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomerPanel.Models;
using System.Configuration;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerPanel.Controllers
{
    public class UserController : Controller
    {
        UserDataAccessLayer objuser = new UserDataAccessLayer();

        // GET api/<controller>/5
        [HttpPost]
        [Route("api/User/Get")]
        public User Get([FromBody]User user)
        {
            return objuser.GetUserData(user);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("api/User/Create")]
        public int Post([FromBody]User user)
        {
            return objuser.AddUser(user);
        }

    }
}
