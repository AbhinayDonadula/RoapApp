import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import DateInput from '../DateInput';

const styles = {
  display: 'flex',
  justifyContent: 'center'
};
const CenterDecorator = storyFn => (
  <div style={styles}>
    <div style={{ width: 300 }}>{storyFn()}</div>
  </div>
);

storiesOf('DateInput', module)
  .addDecorator(CenterDecorator)
  .add('with out prefill', () => <DateInput />);

storiesOf('DateInput', module)
  .addDecorator(CenterDecorator)
  .add('with Prefill', () => <DateInput preFill="01/01/1988" />, {
    notes: 'We can add notes about the component here.'
  });
storiesOf('DateInput', module)
  .addDecorator(CenterDecorator)
  .add('with help text', () => <DateInput helpText="MM/DD/YYYY" />, {
    notes: 'We can add notes about the component here.'
  });

storiesOf('DateInput', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('disabled', () => <DateInput disabled />);

storiesOf('DateInput', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('All props', () => (
    <DateInput
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      helpText={text('Help Text', 'MM/DD/YYYY')}
      placeholder={text('Placeholder', '__/__/____')}
      preFill={text('prefill with', '')}
    />
  ));
