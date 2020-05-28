import theme from './theme';
import './assets/tailwind.css';

export default {
  title: 'Tailwind Theme',
};

export const Colors = () => ({
  data() {
    const colors = { ...theme.colors };
    delete colors.grey;
    return { colors };
  },
  template: `
    <dl>
      <template v-for="(value, key) in colors">
        <dt v-if="typeof value === 'string'" :key="key">{{ key }}</dt>
        <dd :key="key + '-dd'">
          <div
            v-if="typeof value === 'string'"
            :style="{
              width: '100px',
              height: '75px',
              backgroundColor: value,
              marginBottom: '8px'
            }"
          />
          <dl v-else>
            <template v-for="(childValue, childKey) in value">
              <dt :key="key + '-' + childKey">{{ key }}-{{ childKey }}</dt>
              <dd :key="key + '-' + childKey + '-dd'">
                <div
                  :style="{
                    width: '100px',
                    height: '75px',
                    backgroundColor: childValue,
                    marginBottom: '8px'
                  }"
                />
            </template>
          </dl>
        </dd>
      </template>
    </dl>
  `,
});
