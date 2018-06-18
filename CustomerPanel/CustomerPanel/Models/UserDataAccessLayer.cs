using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerPanel.Models
{
    public class UserDataAccessLayer
    {
        string connectionString = "Server=EMRE-PC;Database=CustomerPanel;Trusted_Connection=True;";

        //To Add new user record 
        public int AddUser(User user)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd;
                    cmd = new SqlCommand("INSERT INTO [User] (UserName, Password) VALUES (@username, @password)", con);
                    cmd.Parameters.AddWithValue("@username", user.UserName);
                    cmd.Parameters.AddWithValue("@password", user.Password);
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

        //Get the details of users
        public User GetUserData(User data)
        {
            try
            {
                User user = new User();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM [User] WHERE UserName=@username AND Password=@password";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    cmd.Parameters.AddWithValue("@username", data.UserName);
                    cmd.Parameters.AddWithValue("@password", data.Password);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        user.UserID = Convert.ToInt32(rdr["UserID"]);
                        user.UserName = rdr["UserName"].ToString();
                        user.Password = rdr["Password"].ToString();
                    }
                }
                return user;
            }
            catch
            {
                throw;
            }
        }
    }
}
