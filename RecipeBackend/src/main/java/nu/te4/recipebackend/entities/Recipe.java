/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.entities;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author TE41906
 */
public class Recipe {

    private int id;
    private String name;
    private String imageUrl;
    private int authorId;
    private int instructionId;
    private List<Category> categoryList = new ArrayList<>();
    private List<Ingredient> ingredientList = new ArrayList<>();
    private List<Instruction> instructionList = new ArrayList<>();

    public Recipe() {

    }
    
    public Recipe(int id, String name, String imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    public Recipe(String name, String imageUrl, int authorId) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.authorId = authorId;
    }

    public Recipe(String name, String imageUrl, int authorId, List<Instruction> instructionList) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.authorId = authorId;
        this.instructionList = instructionList;
    }

    public Recipe(int id, String name, String imageUrl, int instructionId) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.instructionId = instructionId;
    }

    public int getInstructionId() {
        return instructionId;
    }

    public void setInstructionId(int instructionId) {
        this.instructionId = instructionId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<Category> getCategoryList() {
        return categoryList;
    }

    public void setCategoryList(List<Category> categoryList) {
        this.categoryList = categoryList;
    }

    public List<Ingredient> getIngredientList() {
        return ingredientList;
    }

    public void setIngredientList(List<Ingredient> ingredientList) {
        this.ingredientList = ingredientList;
    }

    public List<Instruction> getInstructionList() {
        return instructionList;
    }

    public void setInstructionList(List<Instruction> instructionList) {
        this.instructionList = instructionList;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

}
