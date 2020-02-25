import React, { useState } from 'react';
import IngredientHandler from './IngredientHandler';

export const RecipeInserter = () => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
    console.log(name);
  };

  return (
    <div className="container">
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
        <IngredientHandler />
        <div className="field is-grouped is-grouped-right">
          <button className="button is-link ">Submit</button>
        </div>
      </form>
    </div>
  );
};