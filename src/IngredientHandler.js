import React, { useState } from 'react';
import Ingredient from './Ingredient';

const IngredientHandler = () => {
  const [ingredientKey, setIngredientKey] = useState(0);
  const [ingredientFieldList, setIngredientFieldList] = useState([
    <Ingredient key={ingredientKey} showRemove={false} />
  ]);

  const addIngredientField = e => {
    e.preventDefault();
    setIngredientKey(ingredientKey + 1);
    const newArray = [...ingredientFieldList];
    newArray.push(
      <Ingredient
        key={ingredientKey + 1}
        showRemove={true}
        removeIngredientField={removeIngredientField}
        id={ingredientKey + 1}
      />
    );
    setIngredientFieldList(newArray);
  };

  const removeIngredientField = id => {
    console.log(ingredientFieldList);
    // ingredientFieldList.forEach(ingredient => {
    //   console.log(ingredient.props.id);
    // });
    // const filteredArray = ingredientFieldList.filter(ingredientField => {
    //   console.log(ingredientField.props.id);
    //   return ingredientField.props.id !== id;
    // });
    // console.log(filteredArray);
    // setIngredientFieldList(filteredArray);
  };

  return (
    <div className="field">
      <label className="label">Ingredients</label>
      {ingredientFieldList}
      <div className="control">
        <button className="button is-success" onClick={addIngredientField}>
          +
        </button>
      </div>
    </div>
  );
};

export default IngredientHandler;
