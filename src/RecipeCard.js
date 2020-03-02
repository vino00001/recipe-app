import React, { useState } from 'react';
import RecipeCardSmall from './RecipeCardSmall';
import RecipeCardLarge from './RecipeCardLarge';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const [columnStyling, setColumnStyling] = useState('column is-one-third');

  const switchToNormal = () => {
    setColumnStyling('column is-one-third');
    setRenderedComponent(
      <RecipeCardSmall recipe={recipe} switchScene={switchToFullWidth} />
    );
  };

  const switchToFullWidth = () => {
    setColumnStyling('column is-full');
    setRenderedComponent(
      <RecipeCardLarge recipe={recipe} switchScene={switchToNormal} />
    );
  };

  const [renderedComponent, setRenderedComponent] = useState(
    <RecipeCardSmall recipe={recipe} switchScene={switchToFullWidth} />
  );

  return <div className={columnStyling}>{renderedComponent}</div>;
};

export default RecipeCard;
