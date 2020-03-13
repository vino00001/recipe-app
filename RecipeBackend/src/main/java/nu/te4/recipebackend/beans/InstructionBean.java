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
import java.util.List;
import javax.ejb.Stateless;
import nu.te4.recipebackend.ConnectionFactory;
import nu.te4.recipebackend.entities.Instruction;

/**
 *
 * @author TE41906
 */
@Stateless
public class InstructionBean {

    public static int createInstrutcion() {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            Statement stmt = connection.createStatement();
            String sql = "INSERT INTO instruction VALUES (NULL)";
            return stmt.executeUpdate(sql);
        } catch (Exception e) {
            System.out.println("Error CategoryBean.createInstruction(): " + e.getMessage());
        }
        return 0;
    }

    public static int getInstructionId() {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            int id = 0;
            Statement stmt = connection.createStatement();
            String sql = "SELECT id FROM instruction ORDER BY id DESC LIMIT 1"; //selects lastest id
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

    public static int saveInstructionSteps(List<Instruction> instructionSteps, int instructionId) {
        try ( Connection connection = ConnectionFactory.getConnection()) {
            for (Instruction step : instructionSteps) {
                String sql = "INSERT INTO step VALUES (NULL, ?, ?, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setString(1, step.getContent());
                stmt.setInt(2, step.getNumber());
                stmt.setInt(3, instructionId);
                stmt.executeUpdate();
            }
            return 1;
        } catch (Exception e) {
            System.out.println("Error CategoryBean.saveInstructionSteps(): " + e.getMessage());
        }
        return 0;
    }
}
