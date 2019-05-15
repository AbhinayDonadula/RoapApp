import PropTypes from 'prop-types';

const Input = props => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      autoComplete="off"
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      maxLength={props.maxLength}
      onKeyDown={props.onKeyDown}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  name: '',
  className: '',
  disabled: false,
  placeholder: '',
  value: '',
  maxLength: 50,
  onKeyDown: null
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func
};

export default Input;
