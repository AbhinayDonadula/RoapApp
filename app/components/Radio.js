import PropTypes from 'prop-types';

const Radio = props => {
  return (
    <div className="control" style={{ width: '40%' }}>
      {props.label.length ? (
        <label className="label">{props.label}</label>
      ) : null}
      {props.options.map(each => {
        return (
          <label className="radio" key={each}>
            <input type="radio" name={props.name} />
            {each}
          </label>
        );
      })}
    </div>
  );
};

Radio.defaultProps = { options: ['Yes', 'No'], label: '' };

Radio.propTypes = { options: PropTypes.array, label: PropTypes.string };

export default Radio;
