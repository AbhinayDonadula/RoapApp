import React from 'react';
import DateInput from './components/DateInput';

const Equipment = () => {
  return (
    <React.Fragment>
      <div className="equip__label">
        <span className="section__heading">Equipment </span>
        <hr className="hr" />
      </div>
      <div className="equip__container">
        <div className="roap__date">
          <DateInput label="What is the Roap Date?" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Equipment;
