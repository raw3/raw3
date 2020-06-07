import { VennCategory } from '@shared/enums';
import { BlogData } from '@shared/interfaces';

export const blog1Data: BlogData = {
  description: 'The six steps I took to quit my job and become a digital nomad.',
  keywords: [
    {
      text: 'travel',
      venn: VennCategory.YELLOW
    },
    {
      text: 'freelancing',
      venn: VennCategory.BLUE
    }
  ],
  prologue: {
    body: [
      'I can sum up some more tropical words to get you in the' +
      'groove of desiring the lifestyle of the so-called <b>digital nomads</b>, people not tied to a location' +
      'who can do their work from wherever they are in the world, but I guess you get the idea.',
      'The steps mentioned here are the steps I took before I took the leap to become a digital nomad.' +
      'I hope that by writing these I can <b>persuade at least one person who dreams of doing this to stop' +
      'making excuses and just do it.</b>'
    ],
    image: {
      alt: 'Rocky cliffs with surfer waves at coast Sydney',
      caption: 'Amazing views accompany the lifestyle of the digital nomad.',
      path: 'raw3-surfers-demise.jpg',
      title: 'Amazing views for the digital nomad'
    },
    introduction: [
      'Even though shimmers on the blue horizon look calm and friendly,' +
      'waves of white keep crashing against the brown-grey rocks. I think to myself that' +
      'the more distance there is, the more different the perceived reality might be. I decide to continue my work' +
      'as I look down from the horizon until I reach my sleek laptop, ice-cold soft-drink, and fried sweet potato wedges.' +
      'I ready myself by burying my feet in the sand and start writing code powered by a warm breeze carrying sounds of the ocean.'
    ]
  },
  paragraphs: [
    {
      body: [
        'If I like to travel so much, why not <b>quit and become a freelancer?</b>',
        'There were multiple answers in my head to quickly banish this thought out of my head,' +
        'but empowered by rum-infused bravery I came with a single argument to dispose of all the negativity:',
        '<b>There is no “worst case scenario” that is even remotely bad.</b>',
        'This is where I made my decision to go for it, amongst applauding palm leaves and smiling crustaceans.'
      ],
      header: '<b>Step 1</b>: Deciding to do it',
      image: {
        alt: 'Tropical island San Blas Panama ocean palms',
        caption: 'One of the islands I would stay at in Panama. They prepared amazing lobster there.',
        path: 'raw3-how-i-started-as-a-digital-nomad-2.jpg',
        title: 'Tropical San Blas island for reflection'
      },
      introduction: [
        'Bouncing up and down in a gasoline reeking speedboat commandeered by local Kuna villagers,' +
        'I traverse the number one cocaine smuggle route between Panama and Colombia. Here I travel from' +
        'beautiful remote island to beautiful remote island in an area called San Blas. For some reason, the' +
        'slowly sinking sun across the ocean results in that one thought that changed my life.'
      ]
    },
    {
      body: [
        'When I made the decision to start travelling, I instantly knew I wanted to go to <b>Australia</b>.' +
        'Everyone I met who has been to Australia says it is awesome, and all the Australians I met during my travels are awesome.' +
        'Having done my diving certification on the same trip as I made my decision, I figured Australia would be a beautiful place' +
        'to go diving, not to mention visit the reefs before they completely die out.',
        'Another perk was that the country seems <b>very friendly to backpacker work</b>, even though it may be hard labour' +
        'for not that much money. As a starting freelancer, it seemed like a perfect back-up in case I wouldn’t find any programming work.'
      ],
      header: '<b>Step 2</b>: Picking the first destination',
      image: {
        alt: 'Sydney Opera House from Sydney bridge Harbour',
        caption: 'Australia might be an expensive country, but the culture is very open to backpackers.',
        path: 'raw3-how-i-started-as-a-digital-nomad-3.jpg',
        title: 'Australia Sydney Opera House'
      },
      introduction: [
        'With sunrays dancing through a ceiling of water, I slowly sink into the deep. As I look up, it reminds' +
        'me of that scene which could have been prevented if only Rose didn’t need her personal space on her luxury Titanic flotsam.' +
        'As I look in the deep, I now understand Jacks decision to leave her up there as I descend in a new world of colour and life' +
        'which would’ve taken my breath away, were it not for my diving instructor who signs me to keep breathing constantly.'
      ]
    },
    {
      body: [
        'Before I could bring the news towards my upper corporate management, I had to figure out exactly how many months' +
        'of saving money I would need. I decided that I wanted to buy a campervan to drive a lap around Australia, and a quick' +
        'Google search showed me I would need about €2500 - €3000 for that. Aside from that, I needed about €2500 for a personal' +
        'laptop to work from prior to going.',
        'I calculated that about three months would make it tight, but it did mean I would be able to start my trip at the' +
        'beginning of 2018.',
        '<span class="list"><b class="title">The costs which I had before I flew were the following:</b><br/>\n' +
        '- €300 for a one-year working holiday visa;<br/>\n' +
        '- €525 for a one-way ticket Amsterdam - Sydney;<br/>\n' +
        '- €2600 for a brand-new laptop;<br/>\n' +
        '- €600 for 12-months of good all-including travelling insurance;<br/>\n' +
        '- €340 for drinks, snacks, and shots at our favourite pub for a goodbye party.</span>',
        'Eventually, I came to Australia with about €4300. The whole month of January I could' +
        'take paid leave because of my workaholic-earned vacation days, which resulted in about an extra €2200 as well.' +
        'In total, I had about <b>€8400 with an extra €2200</b> at the end of January.'
      ],
      header: '<b>Step 3</b>: Calculating the time and budget',
      image: {
        alt: 'Campervan at building depot DIY',
        caption: 'Your way of accommodation highly influences your necessary budget.',
        path: 'raw3-how-i-started-as-a-digital-nomad-4.jpg',
        title: 'Campervan as budget accommodation'
      },
      introduction: [
        'Reassured by a beacon of LCD-light, the patient mosquitoes had no troubles' +
        'finding their source of fresh blood in the still slightly burned arms. It was 2am, but neither the jet-lag amplified' +
        'somnolence nor the feasting insects could persuade me to skip consciousness towards the morning. Why succumb to dreams' +
        'without prospect if I could plan and fulfil my dreams instead?'
      ]
    },
    {
      body: [
        'When I quit, I made sure that I had enough time to transition work and knowledge to other colleagues.' +
        'Aside from the fact that many of my colleagues were friends of mine as well, it also provided my first' +
        'networking opportunity to get my first clients. I would not shy away to tell as many people as possible' +
        'what I was planning to do, and more importantly, ask all of them if they knew someone who might needed a freelance developer.',
        '<b>The moment I told them I would quit in three months’ time was also the moment I got a huge motivation boost</b>.' +
        'I had started taking a run-up towards the edge and I came past the point of no return.'
      ],
      header: '<b>Step 4</b>: Quitting the job',
      image: {
        alt: 'Photoshopped crying CEO as metaphor leaving IBM Richard Wols',
        caption: 'IBM\'s CEO didn\'t actually cry when I quit the company. In case people sue me for this image.',
        path: 'raw3-how-i-started-as-a-digital-nomad-5.jpg',
        title: 'Crying me and Ginni Rometti'
      },
      introduction: [
        `Pumped by the foresight of adventure I stepped towards my manager with a casual
        request if I could have a short moment of his time, preferably sooner than later. As we sat down
        in the armchairs of our hipster IT-office grandmother meeting-room, I looked upon the old grandfather clock.
        Even though it had stopped working, both the clock and I had an understanding it was the right time for change.`
      ]
    },
    {
      body: [
        `After taking the jump, I had to become a freelancer whilst at the same time transferring
        knowledge and projects at my soon-to-be old job.`,
        `<span class="list"><b class="title">I did the following steps to become a freelancer:</b><br/>
        - Create my own company at the chamber of commerce;<br/>\n
        - Find a bookkeeper to manage this;<br/>\n
        - Open a business account at a bank;<br/>\n
        - Move back in with my parents as my official company and residential address;<br/>\n
        - Get my first cheap clients.</span>`,
        `Luckily enough, I managed to get my first projects through my network at my old company. This will form the basis of my
        portfolio, aside from my own personal website. I tried to build this personal website beforehand, but eventually I noticed that
        you are your best and worst critic when developing something that promotes yourself.`,
        `During all the hassles of trying to legally comply as a digital nomad, I found out that I could legally stay out of
        the Netherlands for a maximum of 8 months a year before they might revoke my status as a resident of the Netherlands.
        This in effect makes me unable to be the owner of my own company, which forces me to come back before September. Staying
        away longer than 6 months will result in that I have to pay my taxes to Australia instead, potentially leading to double taxes,
        but this is not a problem since both countries have rulings to make sure you only pay taxes in one country at a time.`,
        `I forge my plan to return on time to reflect on the life as a digital nomad, after which I can decide to stay in the
        Netherlands or stop being a resident in the Netherlands and move my company to a tax-free Caribbean island instead.`,
        '<b>The plan is solid, everything is taken care off, only adventure awaits.</b>'
      ],
      header: '<b>Step 5</b>: Becoming a freelancer',
      image: {
        alt: 'Mutianyu Great Wall of China long road Richard Wols',
        caption: 'The path to become a successful freelancer is long.',
        path: 'raw3-how-i-started-as-a-digital-nomad-6.jpg',
        title: 'Great Wall as path to freelancer'
      },
      introduction: [
        `About 43 seconds too late for my appointment, I calmly enter the building as if I didn\'t just treat my bicycle as a
        race-car. Luckily, none of the angry drivers who didn\'t acknowledge my position in car-traffic are at the reception right now.
        I follow a man to a booth where he asks me to show the paperwork. With a frown and a slight cynical tone, he
        reads out my company name in his most posh English he can muster. "rhhaahwww-the-réé?". I grab my sketchbook and start to draw
        and explain the core of which is me. 20 minutes and about 17 signatures later he shakes my hand as he congratulates me with
        my company.`
      ]
    },
    {
      body: [
        `I embrace all the sacrifices I make next to all the failures and hardships I expect to come.
        <b>That is the price I am willing to pay for success and ultimate freedom.</b>`
      ],
      header: '<b>Step 6</b>: Flying away',
      image: {
        alt: 'Airport Schiphol walking to gate Richard Wols',
        caption: 'Saying goodbye to friends was my final hurdle in going on my lifelong adventure.',
        path: 'raw3-how-i-started-as-a-digital-nomad-7.jpg',
        title: 'Saying goodbye to friends at the airport'
      },
      introduction: [
        `With only 3 hours of sleep, I wake up in the middle of the night. A storm has started. My home country is the last
        one who tries to persuade me to stay, but I am bad at listening to good advice. A friend drives me to the airport amidst
        the storm, as I frantically keep checking if my 5:30am flight is cancelled or not. Over half the flights are, but a single
        brave pilot heading to my layover in Kiev is the luck I need to be on my way.`,
        `As I meet up with that one other friend who is there to say goodbye, suddenly all my friends appear around the corner.
        Jokes of bravado and questions about the contents of my bag mask emotions we tough men are not supposed to show.
        I check-in and walk through the gates. My voice is heavy. I am gone for only 8 months, but somewhere I have the feeling
        it will be the start of a lifetime far away.`
      ]
    }
  ],
  title: 'How I started as a <b>Digital Nomad</b>',
  url: 'how-i-started-as-a-digital-nomad',
  pointOfInterest: {
    date: 1516838400,
    location: {
      lat: -33.920057,
      lng: 151.203693
    }
  },
};
