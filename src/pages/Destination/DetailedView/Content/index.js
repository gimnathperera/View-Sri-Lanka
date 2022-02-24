import HotelCard from 'src/pages/Destination/DetailedView/Content/HotelCard';
import BookingAction from 'src/components/common/BookingAction';

const Content = ({ data }) => {
  return (
    <>
      <section class='relative py-16 bg-white min-w-screen animation-fade animation-delay'>
        <div class='container px-0 px-8 mx-auto sm:px-12 xl:px-5'>
          <h3 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0'>
            About {data?.city}
          </h3>
          <div
            class='w-full px-6 py-6 mx-auto mt-10 bg-white rounded-lg sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3'
            data-aos='fade-up'
          >
            <p
              class='mt-2 text-base text-gray-600 sm:text-lg md:text-normal text-justify'
              data-aos='fade-up'
            >
              {data?.description}
            </p>
          </div>
        </div>
      </section>
      <section class='py-10 bg-white'>
        <div class='container max-w-6xl mx-auto'>
          <h3 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0'>
            Recommended Hotels in {data?.city}
          </h3>
          <p class='mt-2 text-lg text-center text-gray-600'>
            You can get a idea about some hotels.
          </p>
          <div class='grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0'>
            {data?.hotels?.map((hotel, index) => (
              <HotelCard data={hotel} key={index} />
            ))}
          </div>
        </div>
      </section>
      <BookingAction />
    </>
  );
};
export default Content;
