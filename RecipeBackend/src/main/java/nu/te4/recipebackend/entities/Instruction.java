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
public class Instruction {
    
    private int id;
    private String content;
    private int number;
    
    public Instruction() {
        
    }
    
    public Instruction(String content, int number) {
        this.content = content;
        this.number = number;
    }

    public Instruction(int id, String content, int number) {
        this.id = id;
        this.content = content;
        this.number = number;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }  
}
