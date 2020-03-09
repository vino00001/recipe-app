import React, { useState } from 'react';

const Ingredient = ({
  showRemove,
  id,
  removeIngredientField,
  addIngredient
}) => {
  const amountMin = 1;
  const amountMax = 999;

  const [ingredient, setIngredient] = useState({
    //objekt som skickas till arrayen som håller all data som ska skickas till backend
    id: id,
    name: '',
    amount: 0,
    unit: 'unit'
  });

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
          value={ingredient.amount}
          onChange={e => {
            let newObject = { ...ingredient };
            newObject.amount = e.target.value;
            console.log(newObject); //visar det egentliga objektet
            setIngredient(newObject); //sätter ingredient som det nya objektet
            console.log(ingredient); //visar det som borde vara det egentliga objektet, men felaktigt
            addIngredient(ingredient, id);
          }}
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
