import React, { useState } from 'react';
import Ingredient from './Ingredient';

const IngredientHandler = ({
  ingredients,
  setIngredients,
  addIngredient,
  removeIngredient
}) => {
  const [ingredientKey, setIngredientKey] = useState(1); //used as array key and id for every ingredient
  const [ingredientFieldList, setIngredientFieldList] = useState([
    //list of all ingredient fields
    { showRemove: false, id: ingredientKey }
  ]);

  const addIngredientField = e => {
    e.preventDefault();
    setIngredientKey(ingredientKey + 1);
    let newArray = [...ingredientFieldList];
    newArray.push({ showRemove: true, id: ingredientKey + 1 });
    setIngredientFieldList(newArray);
  };

  /**
   * itearets through the field list and removes the one with the specified id
   * @param {int} id
   */

  const removeIngredientField = id => {
    const filteredIngredientFieldArray = ingredientFieldList.filter(
      ingredientField => ingredientField.id !== id
    );
    setIngredientFieldList(filteredIngredientFieldArray);
    removeIngredient(id);
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
          addIngredient={addIngredient}
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
