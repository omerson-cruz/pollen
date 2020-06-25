<template>
  <FormField
    :id="`${id}-month`"
    :variant="variant"
    :size="size"
    :label="label"
    :error="error"
    :invalid="invalid"
    :disabled="disabled"
    class="date-input"
    :class="[
      `date-input__${variant}`,
      `date-input__${size}`,
      {
        'date-input__invalid': invalid || error,
        'date-input__disabled': disabled,
      },
    ]"
  >
    <select
      :id="`${id}-month`"
      :value="month"
      name="month"
      class="date-input--select date-input--field"
      :class="{ 'date-input--field__empty': !month }"
      aria-label="Month"
      :required="required"
      @input="handleInput"
    >
      <option value="">MM</option>
      <option v-for="mm in availableMonths" :key="mm">{{ mm }}</option>
    </select>
    <span class="date-input--divider">/</span>
    <select
      :id="`${id}-day`"
      :value="day"
      name="day"
      class="date-input--select date-input--field"
      :class="{ 'date-input--field__empty': !day }"
      aria-label="Day"
      :required="required"
      @input="handleInput"
    >
      <option value="">DD</option>
      <option v-for="dd in availableDays" :key="dd">{{ dd }}</option>
    </select>
    <span class="date-input--divider">/</span>
    <input
      :id="`${id}-year`"
      ref="year"
      class="date-input--text date-input--field"
      type="text"
      :value="year"
      name="year"
      placeholder="YYYY"
      pattern="[0-9]*"
      aria-label="Year"
      :required="required"
      @input="handleInput"
    />
  </FormField>
</template>

<script>
import isFinite from 'lodash/isFinite';
import shortid from 'shortid';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';

const { Sizes, Variants } = Form;

const toTwoDigits = (num) => (`${num}`.length === 1 ? `0${num}` : `${num}`);
const getNumberSeries = (limit) =>
  Array.from(Array(limit), (_, i) => toTwoDigits(i + 1));
const getDaysInMonth = (month, year) => {
  switch (month) {
    case '02':
      // If a year is defined and it's not a leap year, return 28 days
      if (year && parseInt(year, 10) % 4) {
        return getNumberSeries(28);
      }
      return getNumberSeries(29);
    case '04':
    case '06':
    case '09':
    case '11':
      return getNumberSeries(30);
    default:
      return getNumberSeries(31);
  }
};

const sanitizeYear = (value) =>
  value
    .split('')
    .filter((char) => isFinite(parseInt(char, 10)))
    .slice(0, 4)
    .join('');

const MONTHS = Object.freeze(getNumberSeries(12));

export default {
  components: {
    FormField,
  },
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: Variants.STANDARD,
      validator: (value) => Object.values(Variants).includes(value),
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: shortid.generate,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      month: '',
      day: '',
      year: '',
    };
  },
  computed: {
    availableMonths() {
      return MONTHS;
    },
    availableDays() {
      return getDaysInMonth(this.month, this.year);
    },
  },
  watch: {
    value: {
      handler(newVal) {
        const [m, d, y] = newVal.split('/');
        this.month = isFinite(parseInt(m, 10)) ? m : '';
        this.day = isFinite(parseInt(d, 10)) ? d : '';
        this.year = y ? sanitizeYear(y) : '';
      },
      immediate: true,
    },
    month(newVal) {
      this.validateDay(newVal, this.year);
    },
    year(newVal) {
      this.validateDay(this.month, newVal);
    },
  },
  methods: {
    handleInput(e) {
      const { value, name } = e.target;
      if (name === 'year') {
        // Ensure we only set numeric strings for year.
        const newValue = sanitizeYear(value);
        this.year = newValue;
        this.$refs.year.value = newValue;
      } else {
        this[name] = value;
      }
      this.$emit('input', [this.month, this.day, this.year].join('/'));
    },
    validateDay(month, year) {
      if (!this.day) {
        return;
      }
      if (getDaysInMonth(month, year).includes(this.day)) {
        return;
      }
      this.day = '';
    },
  },
};
</script>

<style scoped>
.date-input--field {
  @apply appearance-none bg-transparent border-0 flex-grow font-sans px-1;
  font-size: 1em;
}

.date-input--select {
  @apply flex-grow text-right;
}

.date-input--text {
  @apply w-full;
  flex-grow: 2;
}

.date-input__ghost-inverted .date-input--field {
  @apply text-white;
}

.date-input--divider,
.date-input--field__empty,
.date-input__ghost-inverted .date-input--field.date-input--field__empty,
.date-input--field::placeholder {
  @apply text-gray-4;
}

.date-input__dense >>> .field-container {
  @apply h-8 px-2;
}

.date-input__normal >>> .field-container {
  @apply h-10 px-3;
}

.date-input__large >>> .field-container {
  @apply h-14 px-3;
}

.date-input__raised.date-input__invalid .date-input--field,
.date-input__raised.date-input__invalid .date-input--field::placeholder,
.date-input__ghost.date-input__invalid .date-input--field,
.date-input__ghost.date-input__invalid .date-input--field::placeholder {
  @apply text-error;
}

.date-input__ghost-inverted.date-input__invalid .date-input--field,
.date-input__ghost-inverted.date-input__invalid
  .date-input--field::placeholder {
  @apply text-error-light-ghost;
}
</style>
