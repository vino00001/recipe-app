/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import nu.te4.recipebackend.ConnectionFactory;
import nu.te4.recipebackend.entities.Recipe;

/**
 *
 * @author TE41906
 */
@Stateless
public class RecipeBean {

    public void saveRecipe(Recipe recipe) {
        InstructionBean.createInstrutcion();
        recipe.setInstructionId(InstructionBean.getInstructionId());
        InstructionBean.saveInstructionSteps(recipe.getInstructionList(), recipe.getInstructionId());
        this.insertRecipe(recipe);
        recipe.setId(this.getRecipeId());
        CategoryBean.saveCategories(recipe.getCategoryList());
        CategoryBean.getCategoriesId(recipe.getCategoryList());
        CategoryBean.insertRecipeHasCategory(recipe.getCategoryList(), recipe.getId());
        IngredientBean.saveIngredients(recipe.getIngredientList());
        IngredientBean.getIngredientsId(recipe.getIngredientList());
        IngredientBean.insertRecipeHasIngredient(recipe.getIngredientList(), recipe.getId());
    }
    
    public List<Recipe> getSimpleRecipes() {
        List<Recipe> recipes = new ArrayList<>();
        try (Connection connection = ConnectionFactory.getConnection()) {
            Statement stmt = connection.createStatement();
            String sql = "SELECT id, name, image FROM recipe";
            ResultSet data = stmt.executeQuery(sql);
            while(data.next()) {
                int id = data.getInt("id");
                String name = data.getString("name");
                String imageUrl = data.getString("image");
                recipes.add(new Recipe(id, name, imageUrl));
            }
        } catch (Exception e) {
            System.out.println("Error RecipeBean.getSimpleRecips(): "+ e.getMessage());
        }
        return recipes;
    }

    private int insertRecipe(Recipe recipe) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            String sql = "INSERT INTO recipe VALUES (NULL, ?, ?, ?, ?)";
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setString(1, recipe.getName());
            stmt.setString(2, recipe.getImageUrl());
            stmt.setInt(3, recipe.getAuthorId());
            stmt.setInt(4, recipe.getInstructionId());
            return stmt.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error RecipeBean.insertRecipe(): " + e.getMessage());
        }
        return 0;
    }

    private int getRecipeId() {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            int id = 0;
            Statement stmt = connection.createStatement();
            String sql = "SELECT id FROM recipe ORDER BY id DESC LIMIT 1"; //selects lastest id
            ResultSet data = stmt.executeQuery(sql);
            while (data.next()) {
                id = data.getInt("id");
            }
            return id;
        } catch (Exception e) {
            System.out.println("Error CategoryBean.getInstructionId(): " + e.getMessage());
        }
        return 0;
    }
}
