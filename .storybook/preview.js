import { addDecorator, addParameters } from '@storybook/vue';
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  docs: {
    inlineStories: true,
  },
});
