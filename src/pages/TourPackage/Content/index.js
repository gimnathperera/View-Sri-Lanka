import { Link } from 'react-router-dom';

import BookingAction from 'src/components/common/BookingAction';
import { tourPackages } from 'src/data/tourpackages';
import TourCard from 'src/pages/TourPackage/Content/TourCard';
import CustomTourCard from 'src/components/common/CustomTourCard';

import days3Card from 'src/assets/img/tour/days3/card.jpg';

const Content = () => {
  return (
    <>
      <section class='py-20 bg-white'>
        <div class='container max-w-6xl mx-auto' data-aos='fade-up'>
          <h2 class='text-5xl font-bold tracking-tight text-center'>
            Sri Lanka Tour Packages
          </h2>
          <p class='mt-2 text-lg text-center text-gray-600'>
            Choose Your tour package according to your Vacation period, Travel
            with a professional tour guide and comfortable vehicle
          </p>
          <div class='grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0'>
            {tourPackages?.map((tour, index) => (
              <TourCard data={tour} key={index} />
            ))}
            <CustomTourCard image={days3Card} special={false} />
          </div>
        </div>
      </section>
      <BookingAction />
    </>
  );
};

export default Content;
