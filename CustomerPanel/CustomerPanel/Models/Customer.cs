using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerPanel.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }

        public string CustomerName { get; set; }

        public string Email { get; set; }

        public string Adress { get; set; }

        public string WebSite { get; set; }

        public string Phone { get; set; }

        public string TaxNumber { get; set; }

        public string PostCode { get; set; }

        public string CustomerSector { get; set; }

        public string AuthorizedPerson { get; set; }
    }
}
