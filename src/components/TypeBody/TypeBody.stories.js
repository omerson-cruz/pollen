import Typography from '../../constants/Typography';
import TypeBody from './TypeBody.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Body, Weights } = Typography;

export default {
  title: 'Typography/TypeBody',
  component: TypeBody,
};

export const Gallery = () => ({
  components: { TypeBody, TypeOverline },
  data() {
    return {
      variants: Object.values(Body),
      weights: Object.values(Weights),
    };
  },
  template: `
    <div>
      <div v-for="variant in variants" :key="variant" :style="{ marginBottom: '48px' }">
        <TypeOverline tag="h1">{{ variant }}</TypeOverline>
        <TypeBody 
          v-for="weight in weights"
          :key="variant + '-' + weight"
          :variant="variant"
          :weight="weight"
          tag="div"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeBody>
      </div>
    </div>
  `,
});
