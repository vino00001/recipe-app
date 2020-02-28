import React from 'react';

const CategoryHandler = () => {
  return (
    <div className="field">
      <div className="control">
        <textarea
          className="textarea is-small has-fixed-size"
          placeholder="Specify your categories here..."
        ></textarea>
      </div>
    </div>
  );
};

export default CategoryHandler;
