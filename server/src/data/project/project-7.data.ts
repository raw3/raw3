import { VennCategory } from '@shared/enums';
import { ProjectData } from '@shared/interfaces';

export const project7Data: ProjectData = {
  client: 'Blockport',
  startDate: 1541667600,
  description: 'A <b>crypto currency exchange</b> focused on social trading and being the most user-friendly in the market.',
  image: {
    alt: 'blockport crypto currency exchange website on laptop behind bricks',
    path: 'raw3-blockport.jpg',
    title: 'blockport crypto currency exchange website on laptop behind bricks'
  },
  paragraph: {
    body: [
      `<a href="https://blockport.io" target="_blank" rel="noreferrer" aria-label="Link to blockport" class="link">Blockport</a> is a crypto currency exchange separating itself by a focus on a great user-experience and aiming to be the first social crypto exchange.`,
      `I worked primarily on the front-end of the application, but aside from that I also set up the end-to-end test framework and supported design.`,
      `<span class="list"><b class="title">Project activities:</b><br/>
      -\tDeveloping the front-end of the application with a strong focus on responsiveness;<br/>
      -\tSetting up TestCafe end-to-end tests after researching viable testing frameworks;<br/>
      -\tSparring with the designer and product manager about the tasks and priorities to create a fast self-steering team with the other front-end developers;<br/>
      -\tGetting drilled by my excellent seniors, <a href="https://www.linkedin.com/in/petro-momot-988a3044/" target="_blank" rel="noreferrer" aria-label="Link to Petro his linkedIn page" class="link">Petro</a> and <a href="https://www.linkedin.com/in/kyranburraston/" target="_blank" rel="noreferrer" aria-label="Link to Kyran his linkedIn page" class="link">Kyran</a>, whom made me feel like a junior again.</span>`
    ]
  },
  roles: [
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
    },
    {
      text: 'TestCafe',
      venn: VennCategory.WHITE
    }
  ],
  title: 'Blockport',
  url: 'blockport',
  pointOfInterest: {
    date: 1560330000,
    location: {
      lat: 52.395918,
      lng: 4.874689
    }
  }
};
