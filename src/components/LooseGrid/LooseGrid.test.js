import { mount } from '@vue/test-utils';
import Grid from '../../constants/Grid';
import LooseGrid from './LooseGrid.vue';

describe('LooseGrid', () => {
  Object.values(Grid.Widths).forEach((width) => {
    test(`renders ${width} width correctly`, () => {
      const wrapper = mount(LooseGrid, {
        propsData: { width },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
