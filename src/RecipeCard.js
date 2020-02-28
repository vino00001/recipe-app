import React, { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const [columnStyling, setColumnStyling] = useState('column is-one-third');
  const [isFullWidth, setIsFullWidth] = useState(false);

  const switchToNormal = () => {
    setColumnStyling('column is-one-third');
    setIsFullWidth(false);
  };

  const switchToFullWidth = () => {
    setColumnStyling('column is-full');
    setIsFullWidth(true);
  };
  return (
    <div className={columnStyling}>
      <div
        className="card"
        onClick={isFullWidth ? switchToNormal : switchToFullWidth}
      >
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
