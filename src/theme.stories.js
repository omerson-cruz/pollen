import theme from './theme';
import './assets/tailwind.css';

export default {
  title: 'Tailwind Theme',
};

// Flatten color object.
const colors = Object.entries(theme.colors).reduce((obj, [key, value]) => {
  if (key === 'grey') return obj; // ignore grey alias of gray
  const newObj = { ...obj };
  if (typeof value === 'string') {
    newObj[key] = value;
  } else if (typeof value === 'object') {
    Object.entries(value).forEach(([subKey, subValue]) => {
      newObj[`${key}-${subKey}`] = subValue;
    });
  }
  return newObj;
}, {});

export const Colors = () => ({
  data() {
    return { colors };
  },
  template: `
    <div :style="{ display: 'flex', flexWrap: 'wrap' }">
      <div
        v-for="(value, key) in colors" 
        :key="key" 
        :style="{ fontSize: '12px', margin: '8px', width: '120px' }"
      >
        <div
          :style="{
            border: '1px solid gray',
            width: '120px',
            height: '80px',
            backgroundColor: value,
            marginBottom: '4px'
          }"
        />
        <div style="{fontSize: '12px'}">
          <b>{{ key }}</b> {{ value}}
        </div>
      </div>
    </div>
  `,
});
