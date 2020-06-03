import Typography from '../../constants/Typography';
import TypeOverline from './TypeOverline.vue';

const { Overline } = Typography;

export default {
  title: 'TypeOverline',
  component: TypeOverline,
};

export const Gallery = () => ({
  components: { TypeOverline },
  data() {
    return {
      variants: Object.values(Overline),
    };
  },
  template: `
    <div>
      <div v-for="variant in variants" :key="variant" :style="{ marginBottom: '48px' }">
        <TypeOverline tag="h1">{{ variant }}</TypeOverline>
        <TypeOverline 
          :variant="variant"
          tag="div"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeOverline>
      </div>
    </div>
  `,
});
