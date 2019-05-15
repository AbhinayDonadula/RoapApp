import React from 'react';
import Radio from './components/Radio';
import TextArea from './components/Textarea';

const Checklist = () => {
  return (
    <React.Fragment>
      <div className="equip__label">
        <span className="section__heading">Checklist </span>
        <hr className="hr" />
      </div>
      {/* company laptop */}
      <div>
        <div className="company__laptop">
          <Radio
            options={['Yes', 'No']}
            name="company laptop"
            label="Do you use a company laptop? "
          />
        </div>
        <div className="company__laptop failed">
          <TextArea />
        </div>
      </div>
      {/* receive token */}
      <div>
        <div className="company__laptop">
          <Radio
            options={['Yes', 'No']}
            name="receive token"
            label="Were you able to receive token? "
          />
        </div>
        <div className="company__laptop failed">
          <TextArea />
        </div>
      </div>
      {/* launch VPN */}
      <div>
        <div className="company__laptop">
          <Radio
            options={['Yes', 'No']}
            name="launch VPN"
            label="Were you able to launch VPN or VDI ? "
          />
        </div>
        <div className="company__laptop failed">
          <TextArea />
        </div>
      </div>
      {/* launch Jabber */}
      <div>
        <div className="company__laptop">
          <Radio
            options={['Yes', 'No']}
            name="launch jabber"
            label="Were you able to launch Jabber ? "
          />
        </div>
        <div className="company__laptop failed">
          <TextArea />
        </div>
      </div>
      {/* Run kronos */}
      <div>
        <div className="company__laptop">
          <Radio
            options={['Yes', 'No']}
            name="run kronos"
            label="Were you able to run Kronos ? "
          />
        </div>
        <div className="company__laptop failed">
          <TextArea />
        </div>
      </div>
      {/* Run kronos */}
      <div>
        <div className="company__laptop failed">
          <TextArea
            label="What are the Work activities you completed during ROAP day?"
            className="work__activities"
          />
        </div>
      </div>
      {/* <div className="manager__container">
        <label className="label">Manager:</label>
        <span className="manager__name">Dhaval Parekh</span>
      </div> */}
    </React.Fragment>
  );
};

export default Checklist;
