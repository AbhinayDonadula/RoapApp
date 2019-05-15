import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { isValidDate } from '../utils';
import useDebounce from '../hooks/useDebounce';

const DateInput = props => {
  const { dispatchToParent, preFill } = props;
  const [date, setDate] = useState(preFill);
  const [isValid, setIsValid] = useState(() => isValidDate(preFill));
  const [isDeleting, setIsDeleting] = useState(false);
  const debouncedValue = useDebounce(date, 500);

  useEffect(() => {
    dispatchToParent({
      zip: preFill,
      validZip: !preFill.length ? null : isValidDate(preFill)
    });
  }, [dispatchToParent, preFill]);

  function handleDate(event) {
    let dateVal = event.target.value;
    const dateStr = String(dateVal);

    if (!Number.isNaN(dateVal * 1) || dateStr.includes('/')) {
      // add - if user is not deleting and length is 2 or 5
      if (!isDeleting && (dateVal.length === 2 || dateVal.length === 5)) {
        dateVal = `${dateVal}/`;
      }

      // check if last digit is / and then remove it
      if (dateStr.endsWith('/') && isDeleting) {
        dateVal = dateVal.slice(0, dateStr.length - 1);
      }

      const valid = isValidDate(dateVal);
      setIsValid(!dateVal.length ? null : valid);
      setDate(dateVal);
      dispatchToParent({
        date: dateVal,
        validDate: !dateVal.length ? null : valid
      });
    }
  }

  function getKeyCode(event) {
    setIsDeleting(event.which === 8);
  }

  return (
    <React.Fragment className="field">
      {props.label.length ? (
        <label className="label">{props.label}</label>
      ) : null}
      <div
        className={`control has-icons-right ${
          props.loading ? 'is-loading' : ''
        }`}
      >
        <Input
          type="text"
          disabled={props.disabled}
          name={props.name}
          placeholder={props.disabled ? 'Disabled' : props.placeholder}
          className={`input ${props.className} ${
            debouncedValue.length ? (isValid ? 'is-success' : 'is-danger') : ''
          }`}
          onChange={handleDate}
          onKeyDown={getKeyCode}
          value={date}
          maxLength={10}
        />
        {props.iconClass.length && !debouncedValue.length ? (
          <span className="kt-input-icon__icon kt-input-icon__icon--right">
            <span>
              <i className={`${props.iconClass}`} />
            </span>
          </span>
        ) : null}
        {!isValid && debouncedValue.length ? (
          <React.Fragment>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
            <div className="help is-danger">
              {`${props.errMsg} `}
              👎
            </div>
          </React.Fragment>
        ) : debouncedValue.length ? (
          <React.Fragment>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
            <div className="help is-success">
              {`${props.successMsg} `}
              👍
            </div>
          </React.Fragment>
        ) : null}
      </div>
      {props.helpText.length ? (
        <span className="form-text text-muted">{props.helpText}</span>
      ) : null}
    </React.Fragment>
  );
};

DateInput.defaultProps = {
  name: 'date',
  placeholder: '__/__/____',
  helpText: 'MM/DD/YYYY',
  className: 'form-control',
  errMsg: 'Please enter valid date (mm/dd/yyyy)',
  successMsg: 'Date is valid',
  preFill: '',
  iconClass: 'la la-calendar',
  label: 'Date',
  disabled: false,
  loading: false,
  dispatchToParent: () => {}
};

DateInput.propTypes = {
  errMsg: PropTypes.string,
  dispatchToParent: PropTypes.func,
  helpText: PropTypes.string,
  label: PropTypes.string,
  preFill: PropTypes.string,
  placeholder: PropTypes.string,
  successMsg: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default DateInput;
