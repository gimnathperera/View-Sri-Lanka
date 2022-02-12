import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import ellaImage from 'src/assets/img/destination/Elladesti.jpg';
import dambulla from 'src/assets/img/destination/dambulla.jpg';
import colombo from 'src/assets/img/destination/colombo.jpg';
import colomboX from 'src/assets/img/destination/colomboX.jpg';
import sigiriya from 'src/assets/img/destination/sigiriya.jpg';
import polonnaruwa from 'src/assets/img/destination/polonnaruwa.jpg';
import anuradhapura from 'src/assets/img/destination/anuradhapura.jpg';
import jaffna from 'src/assets/img/destination/jaffna.jpg';
import trincomalee from 'src/assets/img/destination/trincomalee.jpg';
import kandy from 'src/assets/img/destination/kandy.jpg';
import nuwaraeliya from 'src/assets/img/destination/nuwaraeliya.jpg';
import yala from 'src/assets/img/destination/yala.jpg';
import tangalle from 'src/assets/img/destination/tangalle.jpg';
import galle from 'src/assets/img/destination/galle.jpg';
import bentota from 'src/assets/img/destination/bentota.jpg';
import negambo from 'src/assets/img/destination/negambo.jpg';
import Maniumpathy from 'src/assets/img/hotel/Maniumpathy.jpg';
import Hero from 'src/components/common/Hero';
import Content from 'src/pages/Destination/DetailedView/Content';

const places = [
  {
    id: 1,
    city: 'Colombo',
    country: 'Sri Lanka',
    image: colombo,
    rating: 4.5,
    heroImage: colomboX,
    backgroundImage: colomboX,
    hotels: [
      {
        name: 'Maniumpathy',
        image: Maniumpathy,
        rating: 4.5,
      },
    ],
    description: `Sri Lanka’s bustling commercial capital Colombo is the country’s
    busy business hub. Historically known as the garden city of the
    East Colombo sits about an hour’s drive south of the Katunayake
    International Airport Colombo and holds a variety of activities
    for the urban visitor. Busy daytime traffic, high rise buildings,
    commercial centres and modern infrastructure found in the heart of
    the city has made Colombo not much different from any other
    developed city in South East Asia, however still retaining its
    character and authentic nature. The other unique aspect of Colombo
    is that it surprisingly has lots of greenery left within the city
    and the suburbs than in other similar cities in the region.
   
    The natural sea port in Colombo has been used in international
    trade from as far as the 5th Century. Chinese, Roman and Arab
    trades have been involved in trade through the Colombo harbour
    since the very early days and the Arabs have settled in the area
    during the 8th century and have become the middle men in trade
    between the international trades and the Sri Lankan Kingdoms in
    the interior of the island. However, Colombo received much more
    prominence after the arrival of the sea traders from the west.
    Portuguese arrived in Colombo in 1505 and gradually took control
    of Colombo and the trade done through its harbour. In 1659 the
    Dutch defeated the Portuguese and took over Colombo but in 1796
    they had to surrender their trade autonomy to the British who
    arrived and took over full control of all coastal areas of Sri
    Lanka controlled by the Dutch.
   
    At present, Colombo is famous for its world class five star
    hotels, restaurants and shopping arcades. Almost all visitors to
    Sri Lanka spend at least a night or two in this busy city either
    at the beginning or the end of the tour in Sri Lanka. However, you
    find many business travellers from all around the globe spending
    lengthy periods in Colombo on corporate visits. The accommodation
    in Colombo is mainly the classy 5 star hotels and the luxury
    boutique hotels, the few mid range hotels in the city and the
    suburbs too offer good value for money. However, the lacking point
    is basic budget accommodation that is clean and reliable. Several
    nice budget places are found in Mount Lavinia and few other places
    but it is always best to use the known hotels during a short stay
    in Colombo.

    Colombo has much to offer and fascinate any visitor with its mix
    of influences from the colonial period, variety of food and
    restaurants, religious places, architecture, spas, monuments,
    museums, night life, sopping, beaches, classy hotels and much
    more. Visitors could still see remaining building from the
    colonial period, some more than 250 years old. The Dutch Church of
    Wolfendhaal dating back to 1749, Galle Face Hotel, Grand Oriental
    Hotel, The famous Cargills & Millers building, Old Dutch Hospital
    and several other buildings are still to be seen in a well
    preserved condition in the Fort and Pettah areas, which were the
    main administrative and commercial areas during the colonial
    period. Many other mansions of former British officials are also
    seen in the heart of Colombo, not to forget Mt. Lavinia Hotel just
    a few kilometres south of Colombo, another famous British period
    building.
    
    Visitors both local and foreign enjoy a visit to the Galle Face
    Green bordering the sea, adjacent to the historic Galle Face
    Hotel. Especially in the evenings and weekends this promenade is
    full of happy people, families with children from many different
    places of the country, kite fliers, food shops, vendors, lovers,
    children playing sport and much more.
   
    The Pettah Bazaar and Sea Street, the Goldsmith’s quarters are
    also nice places to visit and experience the busiest areas of the
    city.
    
    The Buddhist Temple in Kelaniya dating back to the 6th century,
    Gangarama Temple in Slave Island with the Seemamalaka Meditation
    Island in the Beira Lake in front, Gothami Temple in Borella with
    splendid paintings, St. Pauls Church in Milagiriya one of the
    oldest churches in Colombo, The Mosque in Devatagaha, Murugan
    Hindu Temple in Slave Island along with other Hindu Temples in
    Wellawatta area are some important religious buildings in and
    around Colombo. These buildings represent the multi religious and
    multi cultural mixed society in Colombo and are visited by many,
    from various parts of the world. The replica of the famous Aukana
    Buddha Statue in Borella and the Bandaranayake International
    Convention Center (BMICH) in front it are also considered as
    landmarks in Colombo.
  
    There are three museums in Colombo, namely The National Museum of
    Colombo and The Natural History Museum, both located in Colombo 7,
    and the Dutch Period Museum located in Pettah. Visiting the Zoo in
    Dehiwala, playing golf at the Royal Colombo Golf Club or bird
    watching at the bird sanctuaries in the nearby suburbs of
    Thalangama and Attidiya are activities that could be considered by
    visitors opting to stay longer in Colombo.`,
  },
  {
    id: 2,
    city: 'Dambulla',
    country: 'Sri Lanka',
    image: dambulla,
    rating: 4.5,
  },
  {
    id: 3,
    city: 'Sigiriya',
    country: 'Sri Lanka',
    image: sigiriya,
    rating: 4.5,
  },
  {
    id: 4,
    city: 'Polonnaruwa',
    country: 'Sri Lanka',
    image: polonnaruwa,
    rating: 4.5,
  },
  {
    id: 5,
    city: 'Anuradhapura',
    country: 'Sri Lanka',
    image: anuradhapura,
    rating: 4.5,
  },
  { id: 6, city: 'Jaffna', country: 'Sri Lanka', image: jaffna, rating: 4.5 },
  {
    id: 7,
    city: 'Trincomalee',
    country: 'Sri Lanka',
    image: trincomalee,
    rating: 4.5,
  },
  { id: 8, city: 'Kandy', country: 'Sri Lanka', image: kandy, rating: 4.5 },
  {
    id: 9,
    city: 'Nuwara Eliya',
    country: 'Sri Lanka',
    image: nuwaraeliya,
    rating: 4.5,
  },
  { id: 10, city: 'Ella', country: 'Sri Lanka', image: ellaImage, rating: 4.5 },
  { id: 11, city: 'Yala', country: 'Sri Lanka', image: yala, rating: 4.5 },
  {
    id: 12,
    city: 'Tangalle',
    country: 'Sri Lanka',
    image: tangalle,
    rating: 4.5,
  },
  { id: 13, city: 'Galle', country: 'Sri Lanka', image: galle, rating: 4.5 },
  {
    id: 14,
    city: 'Bentota',
    country: 'Sri Lanka',
    image: bentota,
    rating: 4.5,
  },
  {
    id: 15,
    city: 'Negambo',
    country: 'Sri Lanka',
    image: negambo,
    rating: 4.5,
  },
];

const DetailedView = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPlaceById();
  }, []);

  const getPlaceById = () => {
    setPlace(_.find(places, { id: Number(id) }));
  };

  const heroList = [
    {
      header: place?.city,
      subHeader: place?.country,
      description:
        'Sri Lanka’s bustling commercial capital Colombo is the country’s busy business hub.',
      image: place?.heroImage,
    },
  ];

  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${place?.backgroundImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content data={place} />
    </div>
  );
};

export default DetailedView;
