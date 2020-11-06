import { action } from '@storybook/addon-actions';
import survey from '../../assets/surveys/HrAudit.json';
import BaseSurvey from './BaseSurvey.vue';

export default {
  title: 'BaseSurvey',
  component: BaseSurvey,
  parameters: {
    componentSubtitle: '',
  },
};

export const HrAudit = () => ({
  components: { BaseSurvey },
  data() {
    return { survey };
  },
  methods: {
    handleInput: action('input'),
    handleComplete: action('complete'),
  },
  template: `
  <div class="max-w-2xl mx-auto my-4">
    <BaseSurvey
      :survey="survey"
      @input="handleInput"
      @complete="handleComplete"
    />
  </div>
  `,
});

export const HrAuditWithInitialValues = () => ({
  components: { BaseSurvey },
  data() {
    return { survey, initialValues: { hasPosters: true } };
  },
  methods: {
    handleInput: action('input'),
    handleComplete: action('complete'),
  },
  template: `
  <div class="max-w-2xl mx-auto my-4">
    <BaseSurvey
      :survey="survey"
      @input="handleInput"
      @complete="handleComplete"
    />
  </div>
  `,
});
