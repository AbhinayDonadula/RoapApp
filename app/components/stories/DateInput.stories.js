import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import DateInput from '../DateInput';

storiesOf('DateInput', module)
  .addDecorator(withKnobs)
  .add('with out prefill', () => <DateInput />);

storiesOf('DateInput', module)
  .addDecorator(withKnobs)
  .add('with Prefill', () => <DateInput preFill="01/01/1988" />, {
    notes: 'A very simple example of addon notes'
  });

storiesOf('DateInput', module)
  .addDecorator(withKnobs)
  .add('disabled', () => <DateInput disabled={boolean('Disabled', false)} />);
