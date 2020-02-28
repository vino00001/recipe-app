import React from 'react';

const Step = props => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <p className="subtitle">Step {props.id}:</p>
      </div>
      <div className="control">
        <input type="text" className="input" placeholder="Step..." />
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
