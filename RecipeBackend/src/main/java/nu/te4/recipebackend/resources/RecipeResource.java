/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.recipebackend.resources;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import nu.te4.recipebackend.beans.RecipeBean;
import nu.te4.recipebackend.entities.Recipe;

/**
 *
 * @author TE41906
 */
@Path("")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RecipeResource {

    @EJB
    RecipeBean recipeBean;

    @POST
    @Path("recipe")
    public Response saveRecipes(Recipe recipe) {
        try {
            recipeBean.saveRecipe(recipe);
            return Response.status(Response.Status.CREATED).build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @GET
    @Path("recipe")
    public Response getRecipes() {
        List<Recipe> recipes = recipeBean.getSimpleRecipes();

        if (recipes.isEmpty()) {
            return Response.noContent().build();
        } else {
            return Response.ok(recipes).build();
        }
    }
}
