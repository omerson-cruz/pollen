// import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton/BaseButton.vue';
import CounterBadge from '../CounterBadge/CounterBadge.vue';
import CountersignIcon from '../CountersignIcon/CountersignIcon.vue';
import ModalDialog from './ModalDialog.vue';
import Modal from '../../constants/Modal';
import TabSet from '../TabSet/TabSet.vue';
import TypeHeading from '../TypeHeading/TypeHeading.vue';
import UserAvatar from '../UserAvatar/UserAvatar.vue';

export default {
  title: 'ModalDialog',
  component: ModalDialog,
  parameters: {
    componentSubtitle: '',
  },
};

export const Default = () => ({
  components: { BaseButton, ModalDialog },
  props: {
    actionAlignment: {
      default: select(
        'Action Alignment',
        Object.values(Modal.ActionAlignments),
        Modal.ActionAlignments.CENTER
      ),
    },
    fullBleed: {
      default: boolean('Full Bleed', false),
    },
    header: {
      default: select(
        'Header',
        Object.values(Modal.Headers),
        Modal.Headers.TRANSPARENT
      ),
    },
    overlay: {
      default: select(
        'Overlay',
        Object.values(Modal.Overlays),
        Modal.Overlays.PRIMARY
      ),
    },
    overlayClose: {
      default: boolean('Close on overlay click', true),
    },
    size: {
      default: select('Size', Object.values(Modal.Sizes), Modal.Sizes.REGULAR),
    },
    subfooter: {
      default: text('Subfooter', 'Subfooter message goes here'),
    },
    showDelete: {
      default: boolean('Show delete', false),
    },
  },
  data() {
    return { isModalOpen: true };
  },
  computed: {
    actions() {
      return {
        primary: {
          label: 'Accept',
        },
        secondary: {
          label: 'Skip',
        },
        tertiary: this.showDelete
          ? {
              label: 'Delete',
              preIcon: 'trash',
            }
          : null,
      };
    },
  },
  template: `
  <div>
    <BaseButton @click="isModalOpen = !isModalOpen">Toggle Modal</BaseButton>
    <ModalDialog
      v-if="isModalOpen"
      :action-alignment="actionAlignment"
      :actions="actions"
      :full-bleed="fullBleed"
      :header="header"
      :overlay="overlay"
      :overlay-close="overlayClose"
      :size="size"
      @close="isModalOpen = false">
      <template #header>
        Heading Goes Here
      </template>
      Content
      <template v-if="subfooter" #subfooter>
        {{ subfooter }}
      </template>
    </ModalDialog>
  </div>
  `,
});

export const ImplementationDialog = () => ({
  components: {
    BaseButton,
    CountersignIcon,
    ModalDialog,
    TabSet,
    TypeHeading,
    UserAvatar,
  },
  data() {
    const cosigner = {
      name: 'Keanu Reaves',
      image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
    };
    return {
      isModalOpen: true,
      items: [
        {
          id: 1,
          signer: {
            name: 'Ronald Richards',
            title: 'Janitor',
          },
          signed: true,
          cosigned: false,
          cosigner,
        },
        {
          id: 2,
          signer: {
            name: 'Devon Lane',
            title: 'Receptionist',
          },
          signed: true,
          cosigned: false,
          cosigner,
        },
        {
          id: 3,
          signer: {
            name: 'Kristin Watson',
            title: 'Driver',
          },
          signed: true,
          cosigned: false,
          cosigner,
        },
        {
          id: 4,
          signer: {
            name: 'Esther Howard',
            title: 'Teacher',
          },
          signed: false,
          cosigned: false,
          cosigner,
        },
        {
          id: 5,
          signer: {
            name: 'Darrell Steward',
            title: 'Office Manager',
          },
          signed: false,
          cosigned: false,
          cosigner,
        },
        {
          id: 6,
          signer: {
            name: 'Guy Hawkins',
            title: 'Customer Service',
          },
          signed: false,
          cosigned: false,
          cosigner,
        },
        {
          id: 7,
          signer: {
            name: 'Robert Fox',
            title: 'Crew Member',
          },
          signed: false,
          cosigned: false,
          cosigner,
        },
        {
          id: 8,
          signer: {
            name: 'Kathryn Murphy',
            title: 'President',
          },
          signed: false,
          cosigned: false,
          cosigner,
        },
        {
          id: 9,
          signer: {
            name: 'Gladys Pip',
            title: 'Singer',
          },
          signed: true,
          cosigned: true,
          cosigner,
        },
        {
          id: 10,
          signer: {
            name: 'Charles Mane',
            title: 'Poolboy',
          },
          signed: true,
          cosigned: true,
          cosigner,
        },
        {
          id: 11,
          signer: {
            name: 'Vince Stanly',
            title: 'Waterboy',
          },
          signed: true,
          cosigned: true,
          cosigner,
        },
      ],
      policy: {
        name: 'Policy Name',
      },
    };
  },
  computed: {
    actions() {
      return {
        primary: {
          label: 'Close',
          handler: this.handleClose,
        },
      };
    },
    awaitingSignatures() {
      return this.items.filter((item) => !(item.signed && item.cosigned));
    },
    fullySigned() {
      return this.items.filter((item) => item.signed && item.cosigned);
    },
    tabOptions() {
      const { awaitingSignatures, fullySigned } = this;
      return [
        {
          label: {
            components: { CounterBadge },
            template: `<span class="flex items-center justify-center">Waiting on Signatures <CounterBadge :value="${awaitingSignatures.length}" class="ml-1" /></span>`,
          },
          value: 'incomplete',
        },
        {
          label: {
            components: { CounterBadge },
            template: `<span class="flex items-center justify-center">Fully Signed <CounterBadge :value="${fullySigned.length}" class="ml-1" /></span>`,
          },
          value: 'complete',
        },
      ];
    },
  },
  methods: {
    handleClose() {
      this.isModalOpen = false;
    },
  },
  template: `
  <div>
    <BaseButton @click="isModalOpen = !isModalOpen">Toggle Modal</BaseButton>
    <ModalDialog
      v-if="isModalOpen"
      action-alignment="right"
      :actions="actions"
      @close="handleClose"
    >
      <template #header>
        Implementation Progress
        <TypeHeading tag="div" variant="subtitle" weight="regular">
          {{ policy.name }}
        </TypeHeading>
      </template>
      <TabSet :options="tabOptions" full-width>
        <template #incomplete>
          <ul class="my-4 mx-0 p-0 text-left">
            <li v-for="item in awaitingSignatures" :key="item.id" class="flex items-center py-2">
              <UserAvatar v-bind="item.signer" class="mr-auto" />
              <UserAvatar v-bind="item.cosigner" class="ml-4" size="tiny" />
              <CountersignIcon :signed="item.signed" :countersigned="item.cosigned" class="ml-4" />
            </li>
          </ul>
        </template>
        <template #complete>
          <ul class="my-4 mx-0 p-0 text-left">
            <li v-for="item in fullySigned" :key="item.id" class="flex items-center py-2">
              <UserAvatar v-bind="item.signer" class="mr-auto" />
              <UserAvatar v-bind="item.cosigner" class="ml-4" size="tiny" />
              <CountersignIcon :signed="item.signed" :countersigned="item.cosigned" class="ml-4" />
            </li>
          </ul>
        </template>
      </TabSet>
    </ModalDialog>
  </div>
  `,
});
