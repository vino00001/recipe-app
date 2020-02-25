import React from 'react';

const Ingredient = props => {
  const showRemove = props.showRemove;
  const amountMin = 1;
  const amountMax = 999;

  const unitOptions = [
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

  return (
    <div className="field is-grouped">
      <div className="control">
        <input type="text" className="input" placeholder="Ingredient..." />
      </div>
      <div className="control">
        <input
          type="number"
          className="input"
          defaultValue={amountMin}
          min={amountMin}
          max={amountMax}
        />
      </div>
      <div className="control">
        <div className="select">
          <select>{unitOptionArray}</select>
        </div>
      </div>
      {showRemove && (
        <div className="control">
          <button
            className="button is-danger"
            onClick={() => {
              console.log(props.id);
              props.removeIngredientField(props.id);
            }}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Ingredient;
