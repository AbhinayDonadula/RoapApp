import Equipment from './Equipment';
import Checklist from './Checklist';
import Button from './components/Button';

const RoapForm = () => {
  return (
    <div className="roap_form">
      <div className="manager__container">
        <label className="label">Manager:</label>
        <span className="manager__name">Dhaval Parekh</span>
      </div>
      <Equipment />
      <Checklist />
      <div className="submit__container">
        <Button animated>Submit</Button>
      </div>
    </div>
  );
};

export default RoapForm;
