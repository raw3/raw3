import { VennCategory } from '../../../../shared/enums';
import { Project } from '../../../../shared/models';

export const project6Data: Project = {
  client: 'Fridina',
  date: 1536019200,
  description: 'A client <b>maintenance management system</b> for mechanics to automate administration and centralizing their data.',
  image: {
    alt: 'maintenance management sytem website on laptop in campervan with ocean view',
    path: 'raw3-fridina.jpg',
    cachedSizes: [],
    title: 'maintenance management sytem website on laptop in campervan with ocean view'
  },
  paragraph: {
    body: [
      'The goal of this application was to streamline the different client lists of multiple mechanics and keep data synchronized, whilst at the same time allowing for less time spent on administration.',
      'My role was to do everything from the beginning until the end, including ongoing support and extra feature requests. The main focus was on creating a secure system where administrator users can manage other mechanics.',
      '<span class="list"><b class="title">Project activities:</b><br/>' +
      '-\tDesigning a user-interface and creating the styleguide;<br/>\n' +
      '-\tDeveloping an Angular Universal server-side-render front-end with a focus on protected routes;<br/>\n' +
      '-\tDeveloping a back-end with endpoints connecting the front-end to a MongoDB Database and setting up jwt security;<br/>\n' +
      '-\tHosting the application using Nginx on an Ubuntu server;<br/>\n' +
      '-\tUsing famous pirate names and <a href="https://pirateipsum.me/" target="_blank" rel="noreferrer" aria-label="Link to the Pirate Ipsum Generator" class="link">Pirate Ipsum</a> for amusing myself with the mock data.</span>'
    ]
  },
  roles: [
    {
      text: 'UI designer',
      venn: VennCategory.Purple
    },
    {
      text: 'visual designer',
      venn: VennCategory.Red
    },
    {
      text: 'full-stack developer',
      venn: VennCategory.Blue
    },
    {
      text: 'Angular',
      venn: VennCategory.White
    },
    {
      text: 'SSR',
      venn: VennCategory.White
    },
    {
      text: 'TypeScript',
      venn: VennCategory.White
    },
    {
      text: 'JavaScript',
      venn: VennCategory.White
    },
    {
      text: 'HTML & SCSS',
      venn: VennCategory.White
    },
    {
      text: 'NodeJS',
      venn: VennCategory.White
    },
    {
      text: 'Nginx',
      venn: VennCategory.White
    }
  ],
  title: 'Maintenance Management System',
  url: 'maintenance-management-system',
  location: {
    lat: -14.912070,
    lng: 133.083421
  }
};
