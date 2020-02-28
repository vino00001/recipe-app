import React from 'react';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="column">
      <div className="card" onClick={() => console.log(`${recipe.id} clicked`)}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={recipe.image} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-size-4">{recipe.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
