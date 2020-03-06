import React from 'react';

const Ingredient = ({
  showRemove,
  id,
  ingredients,
  setIngredients,
  removeIngredientField,
  addIngredient
}) => {
  const amountMin = 1;
  const amountMax = 999;
  const arrayIndex = id - 1;

  const unitOptions = [
    'unit',
    'millilitres(mL)',
    'litres(L)',
    'Tablespoon(15mL)',
    'Teaspoon(5mL)',
    'grams(g)',
    'kilograms(kg)'
  ];

  const unitOptionArray = unitOptions.map((option, index) => (
    <option key={index}>{option}</option>
  ));

  const addNewIngredient = e => {
    addIngredient(e, id);
  };

  const removeIngredient = () => {
    removeIngredientField(id);
  };

  return (
    <div className="field is-grouped">
      <div className="control">
        <input type="text" className="input" placeholder="Ingredient..." />
      </div>
      <div className="control">
        <input
          type="number"
          className="input"
          min={amountMin}
          max={amountMax}
          value={ingredients[arrayIndex]}
          onChange={e => addNewIngredient(e)}
        />
      </div>
      <div className="control">
        <div className="select">
          <select>{unitOptionArray}</select>
        </div>
      </div>
      {showRemove && (
        <div className="control">
          <button className="button is-danger" onClick={removeIngredient}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Ingredient;
