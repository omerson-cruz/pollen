<template>
  <FormField
    :id="`${id}-${isPlaceholderVisible ? 'placholder' : 'month'}`"
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
    <input
      v-if="isPlaceholderVisible"
      :id="`${id}-placeholder`"
      :placeholder="placeholder"
      :disabled="disabled"
      class="date-input--placeholder date-input--field"
      value=""
      readonly
      @focus="handlePlaceholderFocus"
    />
    <template v-else>
      <input
        :id="`${id}-month`"
        ref="month"
        :value="month"
        :required="required"
        :disabled="disabled"
        class="date-input--short date-input--field"
        type="text"
        name="month"
        placeholder="MM"
        pattern="[0-9]*"
        aria-label="Month"
        @input="handleInput"
        @focus="hasFocus = true"
        @blur="handleBlur"
      />
      <span class="date-input--divider">/</span>
      <input
        :id="`${id}-day`"
        ref="day"
        :value="day"
        :required="required"
        :disabled="disabled"
        class="date-input--short date-input--field"
        type="text"
        name="day"
        placeholder="DD"
        pattern="[0-9]*"
        aria-label="Day"
        @input="handleInput"
        @focus="hasFocus = true"
        @blur="handleBlur"
      />
      <span class="date-input--divider">/</span>
      <input
        :id="`${id}-year`"
        ref="year"
        :disabled="disabled"
        class="date-input--long date-input--field"
        type="text"
        :value="year"
        name="year"
        placeholder="YYYY"
        pattern="[0-9]*"
        aria-label="Year"
        :required="required"
        @focus="hasFocus = true"
        @blur="handleBlur"
        @input="handleInput"
      />
    </template>
  </FormField>
</template>

<script>
import isFinite from 'lodash/isFinite';
import shortid from 'shortid';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';

const { Sizes, Variants } = Form;

const Fields = Object.freeze({
  MONTH: 'month',
  DAY: 'day',
  YEAR: 'year',
});

const toTwoDigits = (num) => (`${num}`.length === 1 ? `0${num}` : `${num}`);

const getNumberSeries = (limit) =>
  Array.from(Array(limit), (_, i) => toTwoDigits(i + 1));

const getDaysInMonth = (month, year) => {
  switch (month) {
    case '02':
      // If a year is defined and it's not a leap year, return 28 days
      return year && parseInt(year, 10) % 4
        ? getNumberSeries(28)
        : getNumberSeries(29);
    case '04':
    case '06':
    case '09':
    case '11':
      return getNumberSeries(30);
    default:
      return getNumberSeries(31);
  }
};

const sanitizeInput = (field, value) => {
  const characterLimit = field === Fields.YEAR ? 4 : 2;
  const finalValue = value
    .split('')
    .filter((char) => isFinite(parseInt(char, 10)))
    .slice(0, characterLimit)
    .join('');
  return finalValue;
};

export default {
  components: {
    FormField,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: shortid.generate,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    variant: {
      type: String,
      default: Variants.STANDARD,
      validator: (value) => Object.values(Variants).includes(value),
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hasFocus: false,
      month: '',
      day: '',
      year: '',
    };
  },
  computed: {
    isPlaceholderVisible() {
      return (
        !!this.placeholder &&
        !this.hasFocus &&
        !this.month &&
        !this.day &&
        !this.year
      );
    },
  },
  watch: {
    value: {
      handler(newVal) {
        const [m = '', d = '', y = ''] = newVal.split('/');
        this.month = sanitizeInput(Fields.MONTH, m);
        this.day = sanitizeInput(Fields.DAY, d);
        this.year = sanitizeInput(Fields.YEAR, y);
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
    handleBlur(e) {
      // Format entered value
      const { name, value } = e.target;
      if (value) {
        const newValue = toTwoDigits(value);
        e.target.value = newValue;
        this[name] = newValue;
      }

      // Check if this component still has focus. setTimeout is necessary
      // because immediately on blur, focus is set to the body element before
      // focus is moved to the next element.
      setTimeout(() => {
        const activeEl = document.activeElement;
        this.hasFocus = Object.values(this.$refs).includes(activeEl);
      }, 0);
    },
    handleInput(e) {
      const { name, value } = e.target;
      let newValue = sanitizeInput(name, value);

      if (
        (name === Fields.MONTH && parseInt(newValue, 10) > 12) ||
        (name === Fields.DAY &&
          !getDaysInMonth(this.month, this.year).includes(
            toTwoDigits(newValue)
          ))
      ) {
        newValue = newValue.charAt(0);
      }
      this[name] = newValue;
      this.$refs[name].value = newValue;
      this.$emit('input', [this.month, this.day, this.year].join('/'));
      if (name === Fields.MONTH && newValue.length >= 2) {
        this.$refs.day.focus();
      }
      if (name === Fields.DAY && newValue.length >= 2) {
        this.$refs.year.focus();
      }
    },
    async handlePlaceholderFocus() {
      this.hasFocus = true;
      await this.$nextTick();
      this.$refs.month.focus();
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

.date-input--placeholder {
  @apply absolute inset-0 px-3 z-10;
}

.date-input--short {
  @apply flex-grow;
  width: 1.5em;
}

.date-input--short::placeholder {
  @apply text-center;
}

.date-input--long {
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
