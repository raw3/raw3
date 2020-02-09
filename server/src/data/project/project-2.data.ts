import { VennCategory } from '@shared/enums';
import { Project } from '@shared/models';

export const project2Data: Project = {
  client: 'IBM',
  startDate: 1498867200,
  date: 1513555200,
  description: 'A <b>blockchain</b> based <b>trade platform</b> that enhances the overall customer experience when trading internationally.',
  image: {
    alt: 'we.trade platform application on laptop',
    path: 'raw3-we-trade.jpg',
    cachedSizes: [],
    title: 'we.trade platform application'
  },
  paragraph: {
    body: [
      'The <a href="https://we-trade.com/" target="_blank" rel="noreferrer" aria-label="Link to the we.trade website" class="link">we.trade</a> platform is a digital one stop shop for trade. The platform, built on the IBM Blockchain Platform using Hyperledger Fabric, offers banks’ customers access to a simple user-interface, leveraging innovative Smart Contract and opening up potential new trading opportunities.',
      'We worked on this with a team of 20 very capable developers, where every developer was challenged to become a full-stack/blockchain developer. I took the responsibility for the architecture of the front-end applications and mentored the junior developers on the project. Aside from this I participated in the design process by taking the time to spar with the design-team and communicating daily about design changes/improvements.',
      '<span class="list"><b class="title">Project activities:</b><br/>' +
      '-\tDeveloping two web-applications by using Angular4 and Bootstrap;<br/>\n' +
      '-\tCommunicating with a Hyperledger Blockchain by using Loopback and Composer;<br/>\n' +
      '-\tSafeguarding the code quality with code-reviews and Jasmine unit-tests;<br/>\n' +
      '-\tEducating junior developers about best practices, unit-tests, and the Angular4 framework;<br/>\n' +
      '-\tAssisting the designers in the quality of the design by advising on responsiveness, animations, and vector images;<br/>\n' +
      '-\tHolding an unspoken workaholic competition by being surprisingly chatty on Slack when working late.</span>',
      '<b>The Blocks Award: Most innovative use of Blockchain in the Financial Sector 2018</b>'
    ]
  },
  roles: [
    {
      text: 'lead front-end developer',
      venn: VennCategory.Blue
    },
    {
      text: 'Angular',
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
    }
  ],
  title: 'we.trade',
  url: 'we-trade',
  location: {
    lat: 53.215407,
    lng: 6.570238
  }
};
