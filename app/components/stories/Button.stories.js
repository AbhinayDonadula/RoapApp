import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Button from '../Button';

const styles = {
  display: 'flex',
  justifyContent: 'center'
};
const CenterDecorator = storyFn => (
  <div style={styles}>
    <div style={{ width: 300 }}>{storyFn()}</div>
  </div>
);

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'background 1', value: '#00aced', default: true },
      { name: 'background 2', value: '#3b5998' }
    ]
  })
  .add('All props', () => (
    <Button animated={boolean('Animated', true)}>
      {text('Button Name', 'Submit')}
    </Button>
  ));
