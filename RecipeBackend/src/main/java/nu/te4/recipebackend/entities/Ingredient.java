/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.entities;

/**
 *
 * @author TE41906
 */
public class Ingredient {

    private int id;
    private String name;
    private String unit;
    private float amount;

    public Ingredient() {

    }

    public Ingredient(String name, String unit, float amount) {
        this.name = name;
        this.unit = unit;
        this.amount = amount;
    }

    public Ingredient(int id, String name, String unit, float amount) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }
}
