import BookingAction from 'src/components/common/BookingAction';
import DestinationCard from 'src/pages/Destination/Content/DestinationCard';
import ellaImage from 'src/assets/img/destination/Elladesti.jpg';
import dambulla from 'src/assets/img/destination/dambulla.jpg';
import colombo from 'src/assets/img/destination/colombo.jpg';
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

const places = [
  { id: 1, city: 'Colombo', country: 'Sri Lanka', image: colombo, rating: 4.5 },
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

const Content = () => {
  return (
    <>
      <section class='py-20 bg-white'>
        <div class='container max-w-6xl mx-auto'>
          <h2 class='text-4xl font-bold tracking-tight text-center'>
            Some Populare Cities
          </h2>
          <p class='mt-2 text-lg text-center text-gray-600'>
            You can get a idea about some Destinations
          </p>
          <div class='grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0'>
            {places?.map((city, index) => (
              <DestinationCard data={city} key={index} />
            ))}
          </div>
        </div>
      </section>
      <BookingAction />
    </>
  );
};

export default Content;
