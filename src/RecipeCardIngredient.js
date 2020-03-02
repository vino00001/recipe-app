import React from 'react';

const RecipeCardIngredient = ({ ingredient }) => {
  return (
    <li>
      <p className="subtitle">
        {ingredient.amount > 0 && ingredient.amount}{' '}
        {ingredient.unit !== 'unit' && ingredient.unit} {ingredient.name}
      </p>
    </li>
  );
};

export default RecipeCardIngredient;
