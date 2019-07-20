import { VennCategory } from '../../../../shared/enums';
import { Blog } from '../../../../shared/models';

export const blog2Data: Blog = {
  date: 1522800000,
  description: 'The six steps I took to buy and pimp a campervan in Australia.',
  keywords: [
    {
      text: 'travel',
      venn: VennCategory.Yellow
    },
    {
      text: 'architecture',
      venn: VennCategory.Red
    },
    {
      text: 'digital nomad',
      venn: VennCategory.Green
    }
  ],
  prologue: {
    body: [
      `When I took the decision to go to Australia, I instantly knew <b>I wanted to have my own campervan</b> to travel with.On my first ever solo-trip I rented the cheapest smallest car I could find and did a lap around Iceland, so it made perfect sense to me to upgrade it to a bigger car and a bigger island.`,
      `The steps mentioned here are the steps I took to buy, design, and rebuild my van to become my home, office, and partner whom I lovingly named ‘<b>Mary Read</b>’ after a historically fearsome female pirate. In total it cost me about $6760 including buying, repairing, transferring, insuring and renovating the car.`
    ],
    image: {
      alt: 'Campervan life digital nomad forest laptop cozy',
      caption: 'Not having a house does not equal not having a home.',
      cachedSizes: [],
      path: 'raw3-how-i-bought-and-pimped-a-campervan-1.jpg',
      title: 'Campervan in nature'
    },
    introduction: [
      'Friendly forest birds join forces with the morning sun, as audio and video wake my senses. I look around and see the rays of sunlight manoeuvring leaves in the forest and a lone wallaby scavenging around the campsites. Dual-wielding a muesli bar and my laptop touchpad, I start searching google maps and decide the plan for today. I crawl behind the wheels, start my “road-trip” playlist, put up a smile, and start driving towards the next piece of paradise to park my car, house, and office.'
    ]
  },
  paragraphs: [
    {
      body: [
        'Before you start looking for a van, you have to <b>decide which car you need</b>. You can sleep in a van, but there is also the option of sleeping in a tent and driving a wagon. Eventually, you have to take into consideration that your gas is the rent to your new home. Once you know what you want, you can <b>sign up for Gumtree and join your local Facebook groups</b> specifically focused on backpacker cars. Be sure to check often since there is a high demand for backpacker cars, and sellers want to sell quickly.',
        'Since my knowledge about cars is similar to my knowledge about quantum physics, I decided to bring <a href="https://dirkensteef.blogspot.com/" target="_blank" rel="noreferrer" aria-label="Link to the blog of some friends" class="link">some friends</a> to the car viewing. It also added a lot to the intimidation value to show up with three people and talk as nonsensical Dutch as possible whilst making doubtful frowny faces.',
        '<span class="list"><b class="title">Here some pointers I used to make sure the car wasn’t a wreck:</b><br/>' +
        '-\tAsk until when the registration is still valid. If it doesn’t have registration, there’s a good chance it has mechanical problems for it to not have it. Registration is expensive, as I’ll get into in the next step;<br/>\n' +
        '-\tBefore starting the car, check if the engine is warm. If it’s warm, ask how the engine starts when cold;<br/>\n' +
        '-\tLook for any oil traces around the engine block or under the car indicating leaks;<br/>\n' +
        '-\tCheck if the thread of the tires is deep enough;<br/>\n' +
        '-\tAsk when it got thoroughly checked for the last time and if it has any problems you should be aware of;<br/>\n' +
        '-\tThink it over for a few hours instead of immediately buying.</span>',
        'Eventually, I ended up paying <b>$4200</b> for mine, which included a lot of camping equipment and a full year of registration.'
      ],
      header: '<b>Step 1</b>: Buying your car',
      image: {
        alt: 'Campervan ugly interior DIY demolish',
        caption: 'The previous interior of Mary. It felt good to utterly destroy it.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-2.jpg',
        title: 'Old campervan interior'
      },
      introduction: [
        'It was expected that when two Dutch men try to make a deal, ancient haggling spirits from the Netherlands would occupy their minds. Even though we couldn’t get to an agreement, we would still have drinks later. We both knew the underlying message that a deal would be struck that night. A final drunken bartering joust in the night club turned me into the proud owner of a firm handshake, dark-tinted van, surfboard, and an unused expensive female wetsuit.'
      ]
    },
    {
      body: [
        'After haggling is complete, both parties will have to transfer the car to the new owner. Australia is up until now the country with the most incomprehensible administration I have ever encountered, coming from a guy who has lived in the Netherlands. First thing I had to do was <b>understand the roadworthiness regulations in Australia</b>, specifically New South Wales. I’ll try and explain how I understood them so far.',
        'Australia has multiple so-called ‘slips’ for your car to indicate a multitude of things. To make things a bit more fun, they decided to name them by pretty colours instead of something meaningful.',
        '<span class="list"><b class="title">This is what I understood from Australian car regulations:</b><br/>' +
        '-\t<b>Pink slip</b>: This means your car has been checked by an authorized mechanic. The check doesn’t account to much since they simply check your brakes and the seatbelts. The pink slip is required to extend the months of registration on the vehicle. The pink slip on my car costed the previous owner $40;<br/>\n' +
        '-\t<b>Blue slip:</b> This means your car got a complete thorough check by an authorized mechanic. This check is necessary when you’re selling a car without registration or when extending the months of registration when the registration has expired for at least 3 months;<br/>\n' +
        '-\t<b>Green slip:</b> This is a compulsory third-party insurance for your vehicle. It insures you for when you hurt people (not objects) with your car and you are at fault. You need this if you want to have your car registration, and it’s only valid if your car is registered. The green slip on my car cost the previous owner $1235 for a year of insurance;<br/>\n' +
        '-\t<b>Rego:</b> This is the registration on the car. Your car needs to have a pink slip and green slip before you can get it registered, and the costs of registration can vary by state. Extending the registration costs a fee, transferring registration from one state to another cost a fee, and transferring registration ownership costs a fee. Registration extension for a year cost the previous owner $365, and the ownership transfer cost me $125.</span>',
        'Last thing on the list was to <b>sign up for insurance and roadside assistance</b>. Because the green slip only insures you for crashing into people, I paid an extra $410 to be fully insured in case I crash other cars and buildings for a year. Roadside assistance cost me $270 to get help whenever I break down somewhere. In case you wonder how often it happens, about 25% of this blog has been written whilst waiting for roadside assistance.'
      ],
      header: '<b>Step 2</b>: Arranging the administration',
      image: {
        alt: 'Campervan flat tire metaphor Australian bureaucracy',
        caption: 'A flat tire is very representative of Australian bureaucracy: it takes long and is an unexpected hindrance to your plans.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-3.jpg',
        title: 'Flat tire as reference to australian bureaucracy'
      },
      introduction: [
        'Frantically I logged into my Dutch network provider, looking for that one seemingly random piece of proof necessary that Richard A. Wols was the same as Richard Andries Wols. There was never a moment I regretted the inheritance of my grandfathers’ name, but at that moment I had a very strong desire to just be plain old Richard. Please come back tomorrow with the correct proofs of identity, she said. Welcome to Australian bureaucracy, I heard.'
      ]
    },
    {
      body: [
        'After Mary was officially mine, I decided to get her checked properly before attempting my circuit around Down Under. Some people might just drive it and see what goes wrong along the way, but aside from the feeling of being safe I wanted to let my mother know how responsible and big of an adult I was. I then spent some good minutes on Google to <b>search for a mechanic with good reviews</b>.',
        'Asking a mechanic to make Mary at least ‘safe’ is of course subjective to how much money the mechanic wants to earn. Asking the mechanic to show and explain everything to <b>understand what is wrong</b> gave me the feeling I did not get ripped off, aside from giving me a bit of car knowledge as an added bonus.',
        'Eventually, it took a week to get it thoroughly checked and all parts to be delivered and installed. To <b>get her fixed</b>, I paid <b>$1100</b>.',
        '<span class="list"><b class="title">The mechanic fixed the following:</b><br/>' +
        '-\tNew drivers side front-wheel bearing kit;<br/>\n' +
        '-\tNew rear wheel cylinders;<br/>\n' +
        '-\tNew radiator;<br/>\n' +
        '-\tNew fan belt;<br/>\n' +
        '-\tFix the lousy job the previous mechanic did.</span>'
      ],
      header: '<b>Step 3</b>: Fixing her up',
      image: {
        alt: 'Campervan mechanic car-bridge maintenance repairs',
        caption: 'Checking your car mechanically might be expensive, but driving safely should be prioritized.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-4.jpg',
        title: 'Campervan at the mechanic'
      },
      introduction: [
        '“This means you are in love with the car”. I had to prevent myself from yelling at the guy as he was referring to Mary as her being a mere vehicle, not to mention whilst she was in such a weakened vulnerable state. I simply smiled and nodded, but my mind was drifting away with the thought if I might have a transplantable radiator growing in my body.'
      ]
    },
    {
      body: [
        'First, I had to <b>measure the car</b> to make sure I had the right data to work with. Make sure to get all the nooks and crags because they can ruin your constructions once forgotten.',
        'Next, I started to <b>look up references</b> on Google and Pinterest to get inspired, and I found out that a lot of clever designs involved the transformation of furniture.',
        '<span class="list"><b class="title">I decided on the following requirements:</b><br/>' +
        '-\tI want a desk long enough so that I can use it as a kitchen counter and my office desk at the same time;<br/>\n' +
        '-\tI want a double bed because of reasons;<br/>\n' +
        '-\tI want the bed to be as close to the back of the car as possible;<br/>\n' +
        '-\tSince my new life feels like the life of a pirate, but then with less pillage and plunder, the interior has to have a ‘ship-feel’ to it.</span>',
        'After that, I started designing the interior. I personally started with sketching on paper and then put final designs in free 3D software that I used during my architecture studies, but anything really works as long as you <b>create detailed drawings with dimensions</b>.'
      ],
      header: '<b>Step 4</b>: Designing the interior',
      image: {
        alt: 'Campervan DIY double bed desk design',
        caption: 'My campervan with the desk rotated down to transform into a double bed.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-5.jpg',
        title: 'Campervan double bed interior'
      },
      introduction: [
        'A shared gaze of intense suffering and potential death met in between us. Both frozen solid by our sudden appearances, we both knew the risk of sharing our home with each other. I imagined the redback spider must have heard the same stories about the dangerous humans as I had heard about the dangerous spiders. Armed with a napkin, I took the initiative. After a full minute of mixed feelings of relief and regret, I continued measuring the even emptier van than that life-appreciating minute before.'
      ]
    },
    {
      body: [
        'Armed with floor plans, section cuts and 3D impressions, I started to <b>demolish the old interior</b>. If you have ever destroyed IKEA furniture, you should know how much fun it is to grab your saw and hammer and go full mental on the poor ‘IKEA EXPEDIT’ shelf. Be sure to salvage as much materials as you can, because this will save a lot of costs in your building phase. I also spent $70 at a dump site before I left the city to get rid of all the waste and appliances I didn’t think I would use but came with the car.',
        'According to my list of materials I needed tons of timber, some planks, and one big foam mattress to butcher for my custom pillow designs. Make sure to <b>research where to get your materials</b> first, as you can save a lot of costs by getting free/cheap stuff of Facebook or Gumtree instead of buying it new.',
        'Once you know where to get your materials from, some <a href="https://dirkensteef.blogspot.com/" target="_blank" rel="noreferrer" aria-label="Link to the blog of some friends" class="link">good friends’</a> advice was to <b>build at the home depot</b> itself, so that you can get the materials whenever you want. I took this to the next level by using half of my bedframe as a workbench capable of being moved out of my van. Parked in the far-most corner of the parking garage underneath the home depot, I used an adjacent space as personal workplace, which the employees only found hilarious.',
        '<span class="list"><b class="title">Here a cost-breakdown of all the materials I used:</b><br/>' +
        '-\t<b>Tools</b>: I bought a sealant, broom and drill next to the pretty big toolkit I haggled with the car. Gimlets included, it costed me $125;<br/>\n' +
        '-\t<b>Floor</b>: I wanted an old weathered look and feel for the floor, so I got the wood for free of Gumtree (aside the drive being 2 hours in total which I only found out after) and I created slats with salvaged timber from the old interior. Gas costs and screws included, it costed me $30;<br/>\n' +
        '-\t<b>Couch/Desk/Bed frame</b>: The frame timber, nails and screws were pretty cheap at the local Bunnings. I just got the cheapest timber I could find, aside from the trim and desk planks which I wanted to contrast a bit more with the light wood. The good thing about Bunnings was that even though they officially charge for sawing timber to custom sizes, they always did it for free. This makes it super easy to roll in with your list of dimensions and get everything pre-cut ready to be drilled together. I got some steel decorated angle supports for extra strength, of which three I haven’t used yet. With lots of timber and screws left, the cost of everything here was $270;<br/>\n' +
        '-\t<b>Cushions</b>: I got the foam mattress for free from a friend of the guy I bought the van from (thanks Sam) and cut them in half with a standard kitchen knife. The fabric and zippers I got from Spotlight, which luckily had a 30% discount going on. To get them all sewn up I found a guy on Gumtree who did it for me for $60 instead of the $240 a professional store asked me. In total, the custom cushions costed me $100;<br/>\n' +
        '-\t<b>Sealing the redback spider portals</b>: Since the timber on the sides, aside from looking ugly, also had holes with at least one redback spider creeping out of it, I decided I wanted to cover them up. I got some fabric and timber to span the sides of the van, which in total costed me $60.</span>',
        'In total, it cost me about <b>$585</b> to build the entire interior of the van, with enough materials to have built myself an extra shelf and enough timber left to build some custom storage.'
      ],
      header: '<b>Step 5</b>: Building at the home depot',
      image: {
        alt: 'Campervan DIY wooden floor interior',
        caption: 'I chose an old weathered wooden floor to give an old ship look to Mary.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-6.jpg',
        title: 'Wooden floor in campervan'
      },
      introduction: [
        'With a yawn I slowly roll up the escalator to the second floor. The friendly staff greets me in a familiar way, as they have been doing every morning for the past week. I sleep on a couch, but I spend the whole day in the parking garage of the nearby home depot. Arms full of construction materials and a tasty but unhealthy breakfast, I move down towards my project. I take a good bite out of my planks and hammer a nail in my meat pie, ready to face a full day of DIY.'
      ]
    },
    {
      body: [
        'Having spent a total of <b>$6760</b>, I feel completely at home, safe, and insured. This might seem like a big amount, but eventually know that these kind of cars keep their value over the years. ',
        'I said goodbye to the amazing friends who housed me for three weeks on their couch (Ollie, Alex, and Karl, you are legends!) and left Sydney for <b>adventures such as flat tires, malfunctioning 12V chargers, and drug addicts waking me up at night trying to open my doors</b>. Two months of travelling later I can definitely say that this way of exploring the world is my method of being a digital nomad and with that my way to <b>feel completely free</b>.'
      ],
      header: '<b>Step 6</b>: Driving away',
      image: {
        alt: 'Campervan horizon desert straight road',
        caption: 'Driving for hours with no single soul on the road felt incredibly liberating.',
        cachedSizes: [],
        path: 'raw3-how-i-bought-and-pimped-a-campervan-7.jpg',
        title: 'Driving on a long empty road'
      },
      introduction: [
        'Carefully I drive on the bumpy road towards my final destination for the day. Mere minutes before sunset, I finish my dinner as I gaze over the ocean and its ballet of orange lights dancing on the waves. As the first mosquito greets me, I leave the outside and retreat to my sanctuary, open my laptop, and get back to my personal puzzle of mathematics and design. I code until tired, have a final moment under the stars, and fall asleep anxious for the next day to happen.'
      ]
    }
  ],
  title: 'How I bought and pimped a <b>campervan</b>',
  url: 'how-i-bought-and-pimped-a-campervan',
  location: {
    lat: -31.962289,
    lng: 115.842431
  }
};
