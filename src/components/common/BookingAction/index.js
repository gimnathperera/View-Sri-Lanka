const BookingAction = () => {
  return (
    <section class='dark:bg-gray-900 p-8 '>
      <div class='container flex flex-col items-center px-4 py-12 mx-auto text-center backdrop-blur-xl lg:w-1/4 sm:w-full rounded-xl'>
        <h2 class='text-3xl font-semibold tracking-tight text-white sm:text-4xl dark:text-white'>
          Want To Travel With <br /> Us?
        </h2>

        <div class='mt-6 sm:-mx-2'>
          <div class='inline-flex w-full sm:w-auto sm:mx-2'>
            <a
              href='#'
              class='inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            >
              Book Now
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5 ml-1'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </a>
          </div>

          <div class='inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0'>
            <a
              href='#'
              class='inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookingAction;
