import Typography from '../../constants/Typography';
import TypeHeading from './TypeHeading.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Heading, Weights } = Typography;

export default {
  title: 'TypeHeading',
  component: TypeHeading,
};

export const Gallery = () => ({
  components: { TypeHeading, TypeOverline },
  data() {
    return {
      variants: Object.values(Heading),
      weights: [Weights.REGULAR, Weights.STRONG],
    };
  },
  template: `
    <div>
      <div v-for="variant in variants" :key="variant" :style="{ marginBottom: '48px' }">
        <TypeOverline tag="h1">{{ variant }}</TypeOverline>
        <TypeHeading 
          v-for="weight in weights"
          :key="variant + '-' + weight"
          :variant="variant"
          :weight="weight"
          tag="div"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeHeading>
      </div>
    </div>
  `,
});
