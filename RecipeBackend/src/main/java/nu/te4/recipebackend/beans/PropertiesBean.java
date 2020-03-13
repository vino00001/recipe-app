/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.beans;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;

/**
 *
 * @author TE41906
 */
@Stateless
public class PropertiesBean {

    public String getProperty(String key) {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream is = classLoader.getResourceAsStream("credentials.properties");
        try {
            Properties properties = new Properties();
            properties.load(is);
            return properties.getProperty(key);
        } catch (IOException e) {
            System.out.println("Error PropertiesBean.getProperty(): " + e.getMessage());
        }
        return null;
    }
}
