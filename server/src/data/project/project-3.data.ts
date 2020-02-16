import { VennCategory } from '@shared/enums';
import { Project } from '@shared/models';

export const project3Data: Project = {
  client: 'unchain.io',
  date: 1520121600,
  description: 'An application to enable organisations to <b>integrate</b> their applications and devices with <b>blockchain networks</b>.',
  image: {
    alt: 'unchain.io logo blockchain integration viual',
    path: 'raw3-connect-gateway.jpg',
    cachedSizes: [],
    title: 'Unchain.io visual with logo'
  },
  paragraph: {
    body: [
      'The Connect application is a platform designed for companies to integrate their systems with blockchain networks. It is being developed by <a href="https://unchain.io/#/home" target="_blank" rel="noreferrer" aria-label="Link to the unchain website" class="link">unchain.io</a>, a blockchain startup.',
      'I worked primarily on the front-end of the application, but I also assist in both the user-interface & visual design. Next to that I help the other back-end developers with integrating the back-end with front-end.',
      '<span class="list"><b class="title">Project activities:</b><br/>' +
      '-\tSparring about the user-interface designs and improving these if possible;<br/>\n' +
      '-\tCreating small visual details such as icons;<br/>\n' +
      '-\tDesigning the front-end architecture and structure of the application;<br/>\n' +
      '-\tDeveloping the front-end of the application;<br/>\n' +
      '-\tMaking the other guys jealous by dropping by at their office just before I fly to exotic locations.</span>'
    ]
  },
  roles: [
    {
      text: 'UI designer',
      venn: VennCategory.PURPLE
    },
    {
      text: 'front-end developer',
      venn: VennCategory.BLUE
    },
    {
      text: 'Angular',
      venn: VennCategory.WHITE
    },
    {
      text: 'TypeScript',
      venn: VennCategory.WHITE
    },
    {
      text: 'JavaScript',
      venn: VennCategory.WHITE
    },
    {
      text: 'HTML & SCSS',
      venn: VennCategory.WHITE
    }
  ],
  title: 'Connect Gateway',
  url: 'connect-gateway',
  location: {
    lat: -41.450918,
    lng: 147.136022
  }
};
