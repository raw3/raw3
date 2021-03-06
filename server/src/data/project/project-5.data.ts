import { VennCategory } from '@shared/enums';
import { ProjectData } from '@shared/interfaces';

export const project5Data: ProjectData = {
  description: `My <b>personal website</b> using an Angular front-end and NodeJS back-end, complying with the latest <b>Progressive Web Application</b>
 standards and including <b>Server Side Rendering</b>.`,
  git: 'https://www.github.com/raw3/raw3',
  image: {
    alt: 'raw3 raw3.io digital nomad portfolio website campervan sunset',
    path: 'raw3-raw3-io.jpg',
    title: 'raw3.io portfolio website on laptop in campervan with sunset'
  },
  paragraph: {
    body: [
      `This website aims to grow with me as I realise my dream to live location independent all over the world in self-designed houses.
      It shows my world photography, several IT projects I worked on, the blogs that I write and eventually the architecture I design.`,
      `My role was to do everything from the beginning until the end, also as a practice case to understand the complete flow aside from
      just the front-end. I chose Angular because of my extensive experience in the framework and my preference for the Single Page
      Application fast user experience. I used Angular Universal for speed optimization and Search Engine Optimization reasons. I created a
      NodeJS back-end since this is currently preferred with Server Side rendering on Angular applications. Nginx serves as a reverse-proxy
      to intercept calls and redirects them to a NodeJS webserver, both running on my own dedicated Ubuntu server using Docker.`,
      `<span class="list"><b class="title">Project activities:</b><br/>
      -\tCreating the branding and concept;<br/>
      -\tDesigning a user-interface and creating the visuals;<br/>
      -\tDeveloping an Angular Universal server-side-render front-end with a NodeJS back-end;<br/>
      -\tTurning the application into a Progressive Web App to comply with the latest front-end standards;<br/>
      -\tHosting the application using Nginx on an Ubuntu server;<br/>
      -\tCreating the content and making the front-end Search Engine Optimization friendly;<br/>
      -\tTaking generally way too long with designing and coding because I am my worst critic.</span>`
    ]
  },
  roles: [
    {
      text: 'UI designer',
      venn: VennCategory.PURPLE
    },
    {
      text: 'visual designer',
      venn: VennCategory.RED
    },
    {
      text: 'full-stack developer',
      venn: VennCategory.BLUE
    },
    {
      text: 'Angular',
      venn: VennCategory.WHITE
    },
    {
      text: 'PWA',
      venn: VennCategory.WHITE
    },
    {
      text: 'SSR',
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
      text: 'NodeJS',
      venn: VennCategory.WHITE
    },
    {
      text: 'Nginx',
      venn: VennCategory.WHITE
    },
    {
      text: 'Docker',
      venn: VennCategory.WHITE
    }
  ],
  title: 'raw3.io',
  url: 'raw3-io',
  pointOfInterest: {
    date: 1533254400,
    location: {
      lat: -21.930989,
      lng: 114.122270
    }
  }
};
