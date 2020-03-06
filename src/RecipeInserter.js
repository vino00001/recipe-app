import React, { useState } from 'react';
import IngredientHandler from './IngredientHandler';
import StepHandler from './StepHandler';
import CategoryHandler from './CategoryHandler';

const RecipeInserter = () => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSubmit = e => {
    //add POST to backend
    e.preventDefault();
    console.log('Form submitted');
    console.log(name);
  };

  const addIngredient = (e, id) => {
    let newArray = [...ingredients];
    newArray[id - 1] = e.target.value;
    console.log(newArray);
    setIngredients(newArray);
  };

  const removeIngredient = id => {
    const filteredIngredientArray = ingredients.filter(
      ingredient => ingredient !== id - 1
    );
    setIngredients(filteredIngredientArray);
  };

  return (
    <div className="container is-widescreen">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image URL</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Image URL..."
              value={imageURL}
              onChange={e => setImageURL(e.target.value)}
            />
          </div>
        </div>
        <IngredientHandler
          ingredients={ingredients}
          setIngredients={setIngredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
        <StepHandler steps={steps} setSteps={setSteps} />
        <CategoryHandler
          categories={categories}
          setCategories={setCategories}
        />
        <div className="field is-grouped is-grouped-right">
          <button className="button is-link ">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeInserter;
