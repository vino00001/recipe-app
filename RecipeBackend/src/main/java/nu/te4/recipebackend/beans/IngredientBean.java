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
import nu.te4.recipebackend.ConnectionFactory;
import nu.te4.recipebackend.entities.Ingredient;

/**
 *
 * @author TE41906
 */
public class IngredientBean {

    public static int saveIngredients(List<Ingredient> ingredientList) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Ingredient ingredient : ingredientList) {
                String sql = "INSERT IGNORE INTO ingredient VALUES (NULL, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setString(1, ingredient.getName());
                stmt.executeUpdate();
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error IngredientBean.saveIngredients(): " + e.getMessage());
        }
        return 0;
    }

    public static int getIngredientsId(List<Ingredient> ingredientList) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Ingredient ingredient : ingredientList) {
                String sql = "SELECT id FROM ingredient WHERE name = ?";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setString(1, ingredient.getName());
                ResultSet data = stmt.executeQuery();
                while (data.next()) {
                    ingredient.setId(data.getInt(("id")));
                }
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error IngredientBean.getIngredientsId(): " + e.getMessage());
        }
        return 0;
    }

    public static int insertRecipeHasIngredient(List<Ingredient> ingredientList, int recipeId) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Ingredient ingredient : ingredientList) {
                String sql = "INSERT INTO recipe_has_ingredient VALUES (?, ?, ?, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setInt(1, ingredient.getId());
                stmt.setInt(2, recipeId);
                stmt.setString(3, ingredient.getUnit());
                stmt.setFloat(4, ingredient.getAmount());
                stmt.executeUpdate();
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error IngredientBean.insertRecipeHasIngredient(): " + e.getMessage());
        }
        return 0;
    }
}
