import PlaceCard from 'src/pages/TourPackage/DetailedView/Content/PlaceCard';

const DayComponent = ({ day }) => {
  return (
    <div>
      <section class='relative pt-16 pb-4 bg-white min-w-screen animation-fade animation-delay'>
        <div class='container px-0 px-8 mx-auto sm:px-12 xl:px-5'>
          <h3 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-4xl md:text-4xl lg:text-4xl sm:text-center sm:mx-0'>
            {day?.title}
          </h3>

          <div class='w-full px-6 mx-auto mt-8 bg-white rounded-lg sm:px-8 md:px-12  lg:w-5/6 xl:w-2/3'>
            <p class='text-base text-gray-600 sm:text-lg md:text-normal text-justify'>
              {day?.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DayComponent;
