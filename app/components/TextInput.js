import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const TextInput = props => {
  const { dispatchToParent, preFill } = props;
  const [val, setVal] = useState(preFill);

  function handleChange({ target: { value } }) {
    setVal(value);
    dispatchToParent(value);
  }

  useEffect(() => {
    dispatchToParent(preFill);
  }, [dispatchToParent, preFill]);

  return (
    <React.Fragment>
      <div className="" style={{ width: '40%' }}>
        {props.label.length ? (
          <label className="label">{props.label}</label>
        ) : null}
        <Input
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          className="input"
          onChange={handleChange}
          value={val}
          style={props.style}
        />
        {props.iconClass.length ? (
          <span className="kt-input-icon__icon kt-input-icon__icon--right">
            <span>
              <i className={`${props.iconClass}`} />
            </span>
          </span>
        ) : null}
      </div>
      {props.helpText.length ? (
        <span className="form-text text-muted">{props.helpText}</span>
      ) : null}
    </React.Fragment>
  );
};

TextInput.defaultProps = {
  name: 'name',
  placeholder: '',
  helpText: '',
  className: 'form-control',
  iconClass: '',
  label: '',
  style: {},
  preFill: '',
  dispatchToParent: () => {}
};

TextInput.propTypes = {
  dispatchToParent: PropTypes.func,
  helpText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  name: PropTypes.string,
  preFill: PropTypes.string,
  style: PropTypes.object
};

export default TextInput;
