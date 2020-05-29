import { addDecorator } from '@storybook/vue'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import '../src/assets/tailwind.css';
import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);
