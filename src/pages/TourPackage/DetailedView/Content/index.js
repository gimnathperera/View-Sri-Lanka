import BookingAction from 'src/components/common/BookingAction';
import DayComponent from 'src/pages/TourPackage/DetailedView/Content/DayComponent';

const Content = ({ data }) => {
  return (
    <>
      <section class='relative pt-16 pb-4 bg-white min-w-screen animation-fade animation-delay'>
        <div class='container px-0 px-8 mx-auto sm:px-12 xl:px-5'>
          <h3 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0 text-center'>
            {data?.heroText}
          </h3>
          <div class='w-full px-6 py-6 mx-auto mt-10 bg-white rounded-lg sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3'>
            <p class='mt-2 text-base text-gray-600 sm:text-lg md:text-normal text-justify'>
              {data?.description}
            </p>
          </div>
        </div>
      </section>
      <section class='relative py-4 bg-white min-w-screen animation-fade animation-delay'>
        <div class='container px-0 lg:pl-80 mx-auto'>
          <h6 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-2xl lg:text-2xl  sm:mx-0'>
            Activities Covered
          </h6>
          <ul class=' w-fit pt-4'>
            {data?.activitiesCovered &&
              data?.activitiesCovered.map((activity, index) => (
                <li class='flex text-base text-body-color mb-4' key={index}>
                  <span class='rounded-full mr-2 text-base text-primary'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      class='fill-current'
                    >
                      <path d='M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z'></path>
                      <path d='M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z'></path>
                    </svg>
                  </span>
                  {activity}
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section class='relative pt-4 pb-8 bg-white min-w-screen animation-fade animation-delay'>
        <div class='container px-0 lg:pl-80 mx-auto'>
          <h6 class='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-2xl lg:text-2xl  sm:mx-0'>
            Locations Covered
          </h6>
          <ul class=' w-fit pt-4'>
            {data?.locationsCovered &&
              data?.locationsCovered.map((location, index) => (
                <li class='flex text-base text-body-color mb-4' key={index}>
                  <span class='rounded-full mr-2 text-base text-primary'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      class='fill-current'
                    >
                      <path d='M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z'></path>
                      <path d='M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z'></path>
                    </svg>
                  </span>
                  {location}
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section class='relative pt-8 pb-4 bg-white min-w-screen animation-fade animation-delay'>
        <h3 class='text-2xl font-bold text-left bg-white text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0'>
          Full Details of Itinerary
        </h3>
      </section>
      {data?.days &&
        data?.days.map((day, index) => <DayComponent day={day} key={index} />)}
      <BookingAction />
    </>
  );
};
export default Content;
