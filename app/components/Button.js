import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      className={`button button--border-thick button--text-upper button--size-s ${
        props.animated ? 'button--wayra' : ''
      }`}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Button.defaultProps = {
  animated: false
};

export default Button;
