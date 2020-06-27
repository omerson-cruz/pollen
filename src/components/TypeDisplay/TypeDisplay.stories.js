import Typography from '../../constants/Typography';
import TypeDisplay from './TypeDisplay.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Display, Weights } = Typography;

export default {
  title: 'Typography/TypeDisplay',
  component: TypeDisplay,
};

export const Gallery = () => ({
  components: { TypeDisplay, TypeOverline },
  data() {
    return {
      variants: Object.values(Display),
      weights: [Weights.REGULAR, Weights.STRONG],
    };
  },
  template: `
    <div>
      <div v-for="variant in variants" :key="variant" :style="{ marginBottom: '48px' }">
        <TypeOverline tag="h1">{{ variant }}</TypeOverline>
        <TypeDisplay 
          v-for="weight in weights"
          :key="variant + '-' + weight"
          :variant="variant"
          :weight="weight"
          tag="div"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeDisplay>
      </div>
    </div>
  `,
});
