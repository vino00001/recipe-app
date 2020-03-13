/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import nu.te4.recipebackend.beans.PropertiesBean;

/**
 *
 * @author TE41906
 */
public class ConnectionFactory {

    public static Connection getConnection() throws ClassNotFoundException, SQLException {
        PropertiesBean properties = new PropertiesBean();

        String user = properties.getProperty("username");
        String password = properties.getProperty("password");
        String url = "jdbc:mysql://localhost/recipedb";
        Class.forName("com.mysql.jdbc.Driver");
        return (Connection) DriverManager.getConnection(url, user, password);
    }
}
