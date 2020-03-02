import React from 'react';

const RecipeCardSmall = ({ recipe, switchScene }) => {
  return (
    <div className="card" onClick={switchScene}>
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
  );
};

export default RecipeCardSmall;
