import { mount } from '@vue/test-utils';
import Grid from '../../constants/Grid';
import TightGrid from './TightGrid.vue';

describe('TightGrid', () => {
  Object.values(Grid.Widths).forEach((width) => {
    test(`renders ${width} width correctly`, () => {
      const wrapper = mount(TightGrid, {
        propsData: { width },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
