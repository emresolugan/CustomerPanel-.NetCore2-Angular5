using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerPanel.Models
{
    public class CustomerDataAccessLayer
    {
        string connectionString = "Server=EMRE-PC;Database=CustomerPanel;Trusted_Connection=True;";
        //To View all customer details
        public IEnumerable<Customer> GetAllCustomers()
        {
            try
            {
                List<Customer> lstcustomer = new List<Customer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd;
                    cmd = new SqlCommand("SELECT * FROM Customer ", con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Customer customer = new Customer();

                        customer.CustomerID = Convert.ToInt32(rdr["CustomerID"]);
                        customer.CustomerName = rdr["CustomerName"].ToString();
                        customer.Adress = rdr["Adress"].ToString();
                        customer.AuthorizedPerson = rdr["AuthorizedPerson"].ToString();
                        customer.CustomerSector = rdr["CustomerSector"].ToString();
                        customer.Email = rdr["Email"].ToString();
                        customer.Phone = rdr["Phone"].ToString();
                        customer.PostCode = rdr["PostCode"].ToString();
                        customer.TaxNumber = rdr["TaxNumber"].ToString();
                        customer.WebSite = rdr["WebSite"].ToString();

                        lstcustomer.Add(customer);
                    }
                    con.Close();
                }
                return lstcustomer;
            }
            catch
            {
                throw;
            }
        }
        //To Add new customer record 
        public int AddCustomer(Customer customer)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd;
                    cmd = new SqlCommand("INSERT INTO Customer (CustomerName, Adress, AuthorizedPerson, CustomerSector, Email, Phone, PostCode, TaxNumber, WebSite) VALUES (@customername,@adress,@authorizedperson,@customersector,@email,@phone,@postcode,@taxnumber,@website)", con);
                    cmd.Parameters.AddWithValue("@customername", customer.CustomerName);
                    cmd.Parameters.AddWithValue("@adress", customer.Adress);
                    cmd.Parameters.AddWithValue("@authorizedperson", customer.AuthorizedPerson);
                    cmd.Parameters.AddWithValue("@customersector", customer.CustomerSector);
                    cmd.Parameters.AddWithValue("@email", customer.Email);
                    cmd.Parameters.AddWithValue("@phone", customer.Phone);
                    cmd.Parameters.AddWithValue("@postcode", customer.PostCode);
                    cmd.Parameters.AddWithValue("@taxnumber", customer.TaxNumber);
                    cmd.Parameters.AddWithValue("@website", customer.WebSite);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar customer
        public int UpdateCustomer(Customer customer)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd;
                    cmd = new SqlCommand("UPDATE Customer SET CustomerName=@customername, Adress=@adress, AuthorizedPerson=@authorizedperson, CustomerSector=@customersector, Email=@email, Phone=@phone, PostCode=@postcode, TaxNumber=@taxnumber, WebSite=@website WHERE CustomerID=@customerid ", con);
                    cmd.Parameters.AddWithValue("@customername", customer.CustomerName);
                    cmd.Parameters.AddWithValue("@adress", customer.Adress);
                    cmd.Parameters.AddWithValue("@authorizedperson", customer.AuthorizedPerson);
                    cmd.Parameters.AddWithValue("@customersector", customer.CustomerSector);
                    cmd.Parameters.AddWithValue("@email", customer.Email);
                    cmd.Parameters.AddWithValue("@phone", customer.Phone);
                    cmd.Parameters.AddWithValue("@postcode", customer.PostCode);
                    cmd.Parameters.AddWithValue("@taxnumber", customer.TaxNumber);
                    cmd.Parameters.AddWithValue("@website", customer.WebSite);
                    cmd.Parameters.AddWithValue("@customerid", customer.CustomerID);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular customer
        public Customer GetCustomerData(int id)
        {
            try
            {
                Customer customer = new Customer();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Customer WHERE CustomerID= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        customer.CustomerID = Convert.ToInt32(rdr["CustomerID"]);
                        customer.CustomerName = rdr["CustomerName"].ToString();
                        customer.Adress = rdr["Adress"].ToString();
                        customer.AuthorizedPerson = rdr["AuthorizedPerson"].ToString();
                        customer.CustomerSector = rdr["CustomerSector"].ToString();
                        customer.Email = rdr["Email"].ToString();
                        customer.Phone = rdr["Phone"].ToString();
                        customer.PostCode = rdr["PostCode"].ToString();
                        customer.TaxNumber = rdr["TaxNumber"].ToString();
                        customer.WebSite = rdr["WebSite"].ToString();
                    }
                }
                return customer;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record on a particular customer
        public int DeleteCustomer(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd;
                    cmd = new SqlCommand("DELETE FROM Customer  WHERE CustomerID=@customerid ", con);
                    cmd.Parameters.AddWithValue("@customerid", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
