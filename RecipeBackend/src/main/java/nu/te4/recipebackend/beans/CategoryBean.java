/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import javax.ejb.Stateless;
import nu.te4.recipebackend.ConnectionFactory;
import nu.te4.recipebackend.entities.Category;

/**
 *
 * @author TE41906
 */
@Stateless
public class CategoryBean {

    public static int saveCategories(List<Category> categoryList) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Category category : categoryList) {
                String sql = "INSERT IGNORE INTO category VALUES (NULL, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setString(1, category.getName());
                stmt.executeUpdate();
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error CategoryBean.saveCategories(): " + e.getMessage());
        }
        return 0;
    }

    public static int getCategoriesId(List<Category> categoryList) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Category category : categoryList) {
                String sql = "SELECT id FROM category WHERE name = ?";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setString(1, category.getName());
                ResultSet data = stmt.executeQuery();
                while (data.next()) {
                    category.setId(data.getInt(("id")));
                }
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error CategoryBean.getCategoriesId(): " + e.getMessage());
        }
        return 0;
    }

    public static int insertRecipeHasCategory(List<Category> categoryList, int recipeId) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Category category : categoryList) {
                String sql = "INSERT INTO recipe_has_category VALUES (?, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setInt(1, recipeId);
                stmt.setInt(2, category.getId());
                stmt.executeUpdate();
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error CategoryBean.insertRecipeHasCategory(): " + e.getMessage());
        }
        return 0;
    }
}
