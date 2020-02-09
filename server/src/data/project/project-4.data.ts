import { VennCategory } from '@shared/enums';
import { Project } from '@shared/models';

export const project4Data: Project = {
  client: 'Blockchaingers Hackathon 2018',
  startDate: 1522886400,
  date: 1523145600,
  description: 'A <b>logistics system</b> for medicine distribution, with <b>blockchain and IoT</b> as the underlying disrupting technologies.',
  image: {
    alt: 'winners Blockchaingers Hackathon 2018 Global Digital Identity track',
    path: 'raw3-medichain.jpg',
    cachedSizes: [],
    title: 'Winners Blockchaingers Hackathon 2018 Global Digital Identity track'
  },
  paragraph: {
    body: [
      'The <a href="https://blockchaingers.org/teams-2018/unchainio" target="_blank" rel="noreferrer" aria-label="Link to our hackathon contribution" class="link">Medichain</a> application tried to tackle the problem of counterfeit medicines (almost 10% of supplied medicines in third world countries ends up fake or stolen!!) by improving the transparency of medicine distribution from start to finish. We used sensors in medicine packaging to automatically trail where the medicine passes through and push this information in a blockchain for immutability. With a QR code scanner the patient at the end of the line can find out if the packaging has been opened or not. We also built a user-interface for governing NGO\'s to trail everything so that in case something is wrong, they can backtrack exactly where it went wrong or which other medicines might be hoaxed.',
      'We competed with this idea in the biggest blockchain hackathon in the world, <a href="https://blockchaingers.org/p/2018-edition" target="_blank" rel="noreferrer" aria-label="Link to the hackathon website" class="link">Blockchaingers Hackathon 2018</a>. My task was to analyze the business solution and design a functional user-interface, designing all the visuals, and developing the complete front-end of the solution.',
      '<span class="list"><b class="title">Hackathon activities:</b><br/>' +
      '-\tHelping out with transforming the ideation into a technical solution;<br/>\n' +
      '-\tDesigning a user-interface based on the business case;<br/>\n' +
      '-\tCreating the styleguide, icons, and visuals for the application;<br/>\n' +
      '-\tDeveloping the front-end of the application;<br/>\n' +
      '-\tMaking fun of <a href="https://www.linkedin.com/in/emilnikolov/" target="_blank" rel="noreferrer" aria-label="Link to Emil his linkedIn page" class="link">Emil</a> and <a href="https://www.linkedin.com/in/rikmoedt/" target="_blank" rel="noreferrer" aria-label="Link to Rik his linkedIn page" class="link">Rik</a> even though they are awesome developers.</span>',
      '<b>First place: Blockchaingers Hackathon 2018, Global Digital Identity track</b>'
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
      text: 'front-end developer',
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
  title: 'Medichain',
  url: 'medichain',
  location: {
    lat: 53.211226,
    lng: 6.539113
  }
};
