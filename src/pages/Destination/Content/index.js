import BookingAction from 'src/components/common/BookingAction';
import { places } from 'src/data/destinations';

import DestinationCard from 'src/pages/Destination/Content/DestinationCard';

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
