import { mount } from '@vue/test-utils';
import get from 'lodash/get';
import BaseSurvey, { mergeDefaultValues } from './BaseSurvey.vue';
import survey from '../../assets/surveys/HrAudit.json';

describe('BaseSurvey', () => {
  describe('mergeDefaultValues', () => {
    test('applies default values to the survey model', () => {
      const updatedSurvey = mergeDefaultValues(survey, { hasPosters: true });
      expect(
        get(updatedSurvey, ['pages', 0, 'elements', 0, 'defaultValue'])
      ).toBe(true);
    });
  });
  test('renders correctly', () => {
    const wrapper = mount(BaseSurvey, { propsData: { survey } });
    expect(wrapper).toMatchSnapshot();
  });

  test('emits an input event when data changes', async () => {
    const wrapper = mount(BaseSurvey, { propsData: { survey } });
    await wrapper.find('input[name="hasPosters"]').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input[0]).toEqual([{ hasPosters: true }]);
  });
  // TODO(jon.jandoc): Need to add test coverage for the complete event.
});
