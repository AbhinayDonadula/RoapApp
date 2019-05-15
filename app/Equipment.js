import React from 'react';
import DateInput from './components/DateInput';
import Radio from './components/Radio';
import TextInput from './components/TextInput';

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
      <div className="company__laptop">
        <Radio
          options={['Yes', 'No']}
          label="Do you use a company laptop? "
          name="use laptop"
        />
      </div>
      <div className="company__laptop failed">
        <TextInput label="If you were unsuccesful please give a reason: " />
      </div>
    </React.Fragment>
  );
};

export default Equipment;
