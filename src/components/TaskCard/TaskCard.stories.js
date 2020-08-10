import TaskCard from './TaskCard.vue';

export default {
  title: 'TaskCard',
  component: TaskCard,
};

export const DocumentsAwaitingSignature = () => ({
  components: { TaskCard },
  data() {
    return {
      items: [
        {
          title: 'Discrimination & Harassment Policy',
          description: '4 Days Ago',
          actions: [
            {
              // These are all just props that will be spread onto a BaseButton
              // component in TaskCardItem, with the exception of the "handler"
              // function which is bound to the `click` event.
              disabled: true,
              flat: true,
              label: 'Signed',
              preIcon: 'check',
              variant: 'secondary',
            },
          ],
        },
        {
          title: 'Dress Code Policy',
          description: '4 Days Ago',
          actions: [
            {
              flat: true,
              label: 'Preview',
              handler: () => {
                console.log('clicked preview');
              },
            },
            {
              label: 'Sign',
              preIcon: 'pen',
              variant: 'inverted',
              handler: () => {
                console.log('clicked "Dress Code Policy"');
              },
            },
          ],
        },
        {
          title: 'Computer Use Policy',
          description: '4 Days Ago',
          actions: [
            {
              flat: true,
              label: 'Preview',
              handler: () => {
                console.log('clicked preview');
              },
            },
            {
              label: 'Sign',
              preIcon: 'pen',
              variant: 'inverted',
              handler: () => {
                console.log('clicked "Computer Use Policy"');
              },
            },
          ],
        },
        {
          title: 'Paid Time Off Policy',
          description: '4 Days Ago',
          actions: [
            {
              flat: true,
              label: 'Preview',
              handler: () => {
                console.log('clicked preview');
              },
            },
            {
              label: 'Sign',
              preIcon: 'pen',
              variant: 'inverted',
              handler: () => {
                console.log('clicked "Paid Time Off Policy"');
              },
            },
          ],
        },
        {
          title: 'I9 Form',
          description: 'Signed 4 Days Ago',
          attribution: {
            name: 'Sarah Golden',
            image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
          },
          actions: [
            {
              flat: true,
              label: 'Preview',
              handler: () => {
                console.log('clicked preview');
              },
            },
            {
              label: 'Counter Sign',
              preIcon: 'pen',
              variant: 'inverted',
              handler: () => {
                console.log('clicked "I9 Form"');
              },
            },
          ],
        },
      ],
      primaryAction: {
        label: 'Sign All',
        preIcon: 'pen',
        handler: () => {
          console.log('clicked sign all');
        },
      },
    };
  },
  template: `
    <div class="bg-gray-6 flex items-center justify-center w-full min-h-screen">
      <TaskCard
        title="Documents Awaiting Signature"
        :count="4"
        icon="signTablet"
        :items="items"
        :primary-action="primaryAction"
      />
    </div>
  `,
});

export const EmploymentNotices = () => ({
  components: { TaskCard },
  data() {
    return {
      items: [
        {
          title: 'Paid Family Leave Pamphlet DE 2511',
          description:
            "This pamphlet provides information on California's Paid Family Leave program",
          actions: [
            {
              flat: true,
              label: 'View',
              handler: () => {
                console.log('clicked view');
              },
            },
          ],
        },
        {
          title: "Worker's Compensation Pamphlet",
          description:
            "This pamphlet provides information on California's Worker's Compensation program.",
          actions: [
            {
              flat: true,
              label: 'View',
              handler: () => {
                console.log('clicked view');
              },
            },
          ],
        },
        {
          title: 'Sexual Harassment Pamphlet',
          description:
            'This pamphlet informs employees about the definition of Sexual Harassment and their rights in California.',
          actions: [
            {
              flat: true,
              label: 'View',
              handler: () => {
                console.log('clicked view');
              },
            },
          ],
        },
        {
          title: 'Victims of Domestic Violence Leave Notice',
          description:
            "This notice provides information about California's Victims of Domestic Violence Leave law.",
          actions: [
            {
              flat: true,
              label: 'View',
              handler: () => {
                console.log('clicked view');
              },
            },
          ],
        },
        {
          title: 'Disability Insurance Pamphlet - DE 2515',
          description:
            "This pamphlet provides information on California's Disability Insurance Programs.",
          actions: [
            {
              flat: true,
              label: 'View',
              handler: () => {
                console.log('clicked view');
              },
            },
          ],
        },
      ],
      primaryAction: {
        label: 'Acknowledge',
        handler: () => {
          console.log('clicked sign all');
        },
      },
    };
  },
  template: `
    <div class="bg-gray-6 flex items-center justify-center w-full min-h-screen">
      <TaskCard
        title="Employment Notices"
        description="Mandatory notices to employee"
        :count="5"
        icon="clipboard"
        :items="items"
        :primary-action="primaryAction"
      />
    </div>
  `,
});
