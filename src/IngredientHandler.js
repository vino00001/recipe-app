import React, { useState } from 'react';
import Ingredient from './Ingredient';

const IngredientHandler = () => {
  const [ingredientKey, setIngredientKey] = useState(1);
  const [ingredientFieldList, setIngredientFieldList] = useState([
    { showRemove: false, id: ingredientKey }
  ]);

  const addIngredientField = e => {
    e.preventDefault();
    setIngredientKey(ingredientKey + 1);
    let newArray = [...ingredientFieldList];
    newArray.push({ showRemove: true, id: ingredientKey + 1 });
    setIngredientFieldList(newArray);
  };

  const removeIngredientField = id => {
    const filteredArray = ingredientFieldList.filter(
      ingredientField => ingredientField.id !== id
    );
    setIngredientFieldList(filteredArray);
  };

  return (
    <div className="field">
      <label className="label">Ingredients</label>
      {ingredientFieldList.map(ingredientField => (
        <Ingredient
          key={ingredientField.id}
          showRemove={ingredientField.showRemove}
          removeIngredientField={removeIngredientField}
          id={ingredientField.id}
        />
      ))}
      <div className="control">
        <button className="button is-success" onClick={addIngredientField}>
          +
        </button>
      </div>
    </div>
  );
};

export default IngredientHandler;
