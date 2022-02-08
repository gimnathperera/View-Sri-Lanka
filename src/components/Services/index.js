import daytour from 'src/assets/img/home/daytour6.jpg';
import taxi from 'src/assets/img/home/taxie.png';
import travel from 'src/assets/img/home/travel.png';
import img_3 from 'src/assets/img/home/img_3.jpg';

const Services = () => {
  return (
    <section class='bg-white'>
      <div class='w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl'>
        <div class='flex flex-col items-center sm:px-5 md:flex-row'>
          <div class='w-full md:w-1/2 overflow-hidden rounded-lg'>
            <a
              href='#_'
              class='block rounded-lg hover:shadow-[#4ade80] shadow-md hover:shadow-lg'
              style={{
                backgroundImage: `url(${daytour})`,
              }}
            >
              <img
                class='object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96 transition duration-300 ease-in-out hover:scale-110'
                src={daytour}
                alt='img'
              />
            </a>
          </div>
          <div class='flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2'>
            <div class='flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5'>
              <div class='bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block'>
                <svg
                  class='w-3.5 h-3.5 mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <span>Featured</span>
              </div>
              <h1 class='text-4xl font-bold leading-none lg:text-5xl xl:text-6xl'>
                <a href='#_'>07 Days Sri Lanka Tour Package</a>
              </h1>
              <button class='btn btn-outline btn-primary'>Learn More</button>
            </div>
          </div>
        </div>

        <div class='flex grid h-full grid-cols-12 gap-[1.5rem] sm:gap-10 pb-10 mt-8 sm:mt-16 cursor-pointer'>
          <div class='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4'>
            <a
              href='#_'
              class='block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110'
              style={{
                backgroundImage: `url(${taxi})`,
              }}
            ></a>
            <div class='relative z-20 w-full h-auto py-8 text-white bg-[#1A9CD7] border-t-0 border-yellow-200 px-7'>
              <a
                href='#_'
                class='inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-[#1A9CD7] bg-white'
              >
                Resources
              </a>
              <h2 class='mb-5 text-5xl font-bold'>
                <a href='#_'> Airport & City Transfers</a>
              </h2>
              <p class='mb-2 text-lg font-normal text-purple-100 opacity-100'>
                Airport/City Transfers Airport / City Transfers
              </p>
            </div>
          </div>
          <div class='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 cursor-pointer'>
            <a
              href='#_'
              class='block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110'
              style={{
                backgroundImage: `url(${travel})`,
              }}
            ></a>
            <div class='relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-[#D52089] border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7'>
              <a
                href='#_'
                class='inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-[#D52089] bg-white'
              >
                Entertainment
              </a>
              <h2 class='mb-5 text-5xl font-bold'>
                <a href='#_'>Travel With Guides</a>
              </h2>
              <p class='mb-2 text-lg font-normal opacity-100 text-yellow-50'>
                Travel with experienced guides and comfortable vehicles
              </p>
            </div>
          </div>
          <div class='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 cursor-pointer'>
            <a
              href='#_'
              class='block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110'
              style={{
                backgroundImage: `url(${img_3})`,
              }}
            ></a>
            <div class='relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-[#32AD51] border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7'>
              <a
                href='#_'
                class='inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-[#32AD51] bg-white'
              >
                Spacial Packages
              </a>
              <h2 class='mb-5 text-5xl font-bold'>
                <a href='#_'>Special Tour Packages</a>
              </h2>
              <p class='mb-2 text-lg font-normal opacity-100 text-yellow-50'>
                View Lanka special tour packages to get maximum of the tour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
