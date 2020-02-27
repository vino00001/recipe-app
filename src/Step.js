import React, { useState } from 'react';

const Step = props => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <p className="subtitle">{props.id}</p>
      </div>
      <div className="control">
        <input type="text" className="input" />
      </div>
      {/* {props.showRemove && (
        <div className="control">
          <button
            className="button is-danger"
            onClick={() => props.removeStepField(props.id)}
          >
            x
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Step;