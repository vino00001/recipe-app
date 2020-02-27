import React, { useState } from 'react';
import Step from './Step';

const StepHandler = () => {
  const [stepKey, setStepKey] = useState(1);
  const [stepFieldList, setStepFieldList] = useState([
    { showRemove: false, id: 1 }
  ]);

  const addStepField = e => {
    e.preventDefault();
    setStepKey(stepKey + 1);

    let newArray = [...stepFieldList];
    newArray.push({ showRemove: true, id: stepKey + 1 });
    setStepFieldList(newArray);
  };

  //   const removeStepField = id => {
  //     const filteredArray = stepFieldList.filter(
  //       stepField => stepField.id !== id
  //     );
  //     setStepFieldList(filteredArray);
  //   };

  return (
    <div className="field">
      <label className="label">Steps</label>
      {stepFieldList.map(stepField => (
        <Step
          key={stepField.id}
          showRemove={stepField.showRemove}
          //   removeStepField={removeStepField}
          id={stepField.id}
        />
      ))}
      <div className="control">
        <button className="button is-success" onClick={addStepField}>
          +
        </button>
      </div>
    </div>
  );
};

export default StepHandler;
