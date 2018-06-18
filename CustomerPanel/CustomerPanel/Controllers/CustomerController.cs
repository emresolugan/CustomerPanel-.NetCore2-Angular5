using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomerPanel.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerPanel.Controllers
{
    public class CustomerController : Controller
    {
        CustomerDataAccessLayer objcustomer = new CustomerDataAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Customer/Get")]
        public IEnumerable<Customer> Get()
        {
            return objcustomer.GetAllCustomers();
        }

        // GET api/<controller>/5
        [HttpGet]
        [Route("api/Customer/Get/{id}")]
        public Customer Get(int id)
        {
            return objcustomer.GetCustomerData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("api/Customer/Create")]
        public int Post([FromBody]Customer customer)
        {
            return objcustomer.AddCustomer(customer);

        }

        // PUT api/<controller>
        [HttpPut]
        [Route("api/Customer/Edit")]
        public int Put([FromBody]Customer customer)
        {
            return objcustomer.UpdateCustomer(customer);
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("api/Customer/Delete/{id}")]
        public int Delete(int id)
        {
            return objcustomer.DeleteCustomer(id);
        }
    }
}
