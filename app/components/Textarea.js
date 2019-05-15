import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextArea = props => {
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
        <textarea
          className={`textarea ${props.className}`}
          placeholder="comments"
          onChange={handleChange}
          value={val}
        />
      </div>
      {props.helpText.length ? (
        <span className="form-text text-muted">{props.helpText}</span>
      ) : null}
    </React.Fragment>
  );
};

TextArea.defaultProps = {
  name: 'name',
  placeholder: '',
  helpText: '',
  className: 'form-control',
  iconClass: '',
  label: '',
  preFill: '',
  dispatchToParent: () => {}
};

TextArea.propTypes = {
  dispatchToParent: PropTypes.func,
  helpText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  name: PropTypes.string,
  preFill: PropTypes.string
};

export default TextArea;
