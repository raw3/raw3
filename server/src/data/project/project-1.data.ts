import { VennCategory } from '@shared/enums';
import { Project } from '@shared/models';

export const project1Data: Project = {
  client: 'Dutch Blockchain Hackathon 2017',
  startDate: 1486684800,
  date: 1486857600,
  description: 'A <b>digital passport</b> for refugees using local <b>biometric data</b> stored in a <b>blockchain</b>.',
  image: {
    alt: 'winners Dutch Blockchain Hackathon 2017 Identity track',
    path: 'raw3-social-fabric.jpg',
    cachedSizes: [],
    title: 'Winners Dutch Blockchain Hackathon 2017 Identity track'
  },
  paragraph: {
    body: [
      'The <a href="https://blockchaingers.org/teams/the-powerpuff-guys" target="_blank" rel="noreferrer" aria-label="Link to our hackathon entry" class="link">Social Fabric</a> application uses blockchain to create a digital identity system for refugees. Information can be verified by organisations so that other organisations don\'t need to ask for the same information over and over again. The refugee has to grant access for organisations to get this data to realise full identity ownership.',
      'We competed with this idea in the first biggest blockchain hackathon in the world, <a href="https://blockchaingers.org/p/2017-edition" target="_blank" rel="noreferrer" aria-label="Link to the hackathon website" class="link">Dutch Blockchain Hackathon 2017</a>. I contributed to this idea by leading the ideation and coming up with the business case, after which I created the front-end of the application during the hackathon itself.',
      '<span class="list"><b class="title">Hackathon activities:</b><br/>' +
      '-\tCreating the use-case by ideation;<br/>\n' +
      '-\tDeveloping the front-end of the application;<br/>\n' +
      '-\tCreating the pitch and presenting the idea on SXSW mainstage;<br/>\n' +
      '-\tSpearheading a series of meetings and pitches to further develop the idea, including a pitch for the United Nations;<br/>\n' +
      '-\tBeing an idiot by forbidding <a href="https://www.linkedin.com/in/johannesbosma/" target="_blank" rel="noreferrer" aria-label="Link to Johannes Bosma his linkedIn page" class="link">Johannes</a> and <a href="https://www.linkedin.com/in/jahangeer-iqbal/" target="_blank" rel="noreferrer" aria-label="Link to Jahangeer Iqbal his linkedIn page" class="link">Django</a> to touch the front-end because I was too perfectionist.. At a Hackathon.</span>',
      '<b>First place: Dutch Blockchain Hackathon 2017, Identity track</b><br/>\n' +
      '<b>Excellence award: IBM Client Innovation Center</b>'
    ]
  },
  roles: [
    {
      text: 'pitcher',
      venn: VennCategory.Purple
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
  title: 'Social fabric',
  url: 'social-fabric',
  location: {
    lat: 53.210102,
    lng: 6.567911
  }
};
