import React from 'react';
import RecipeCardIngredient from './RecipeCardIngredient';
import RecipeCardInstruction from './RecipeCardInstruction';

const RecipeCardLarge = ({ recipe, switchScene }) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-4">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child">
            <img src={recipe.image} alt="" />
          </article>
          <div className="tile is-child">
            <ul>
              {recipe.ingredients.map((ingredient, index) => {
                return (
                  <RecipeCardIngredient key={index} ingredient={ingredient} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        <div className="tile-is-parent is-vertical">
          <div className="tile is-child has-text-centered">
            <h1 className="title">{recipe.title}</h1>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child">
            <ul>
              {recipe.instruction.map(instruction => {
                return <RecipeCardInstruction instruction={instruction} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Add comment section */}
    </div>
  );
};

export default RecipeCardLarge;
