const Home = () => {
  return (
    <>
      <section class='px-2 py-32 bg-white md:px-0'>
        <div class='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div class='flex flex-wrap items-center sm:-mx-3'>
            <div class='w-full md:w-1/2 md:px-3'>
              <div class='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                <h1 class='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                  <span class='block xl:inline'>Beautiful Pages to</span>
                  <span class='block text-indigo-600 xl:inline'>
                    Tell Your Story!
                  </span>
                </h1>
                <p class='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div class='relative flex flex-col sm:flex-row sm:space-x-4'>
                  <a
                    href='#_'
                    class='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto'
                  >
                    Try It Free
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
                  <a
                    href='#_'
                    class='flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class='w-full md:w-1/2'>
              <div class='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
                <img src='https://cdn.devdojo.com/images/november2020/hero-image.jpeg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='bg-white'>
        <div class='w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl'>
          <div class='flex flex-col items-center sm:px-5 md:flex-row'>
            <div class='w-full md:w-1/2'>
              <a href='#_' class='block'>
                <img
                  class='object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96'
                  src='https://cdn.devdojo.com/images/may2021/cupcakes.jpg'
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
                  <a href='#_'>Savory Templates. Sweet Designs.</a>
                </h1>
                <p class='pt-2 text-sm font-medium'>
                  by{' '}
                  <a href='#_' class='mr-1 underline'>
                    John Doe
                  </a>{' '}
                  · <span class='mx-1'>April 23rd, 2021</span> ·{' '}
                  <span class='mx-1 text-gray-600'>5 min. read</span>
                </p>
              </div>
            </div>
          </div>

          <div class='flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16'>
            <div class='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <a href='#_' class='block'>
                <img
                  class='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56'
                  src='https://cdn.devdojo.com/images/may2021/fruit.jpg'
                />
              </a>
              <div class='bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block'>
                <span>Lifestyle</span>
              </div>
              <h2 class='text-lg font-bold sm:text-xl md:text-2xl'>
                <a href='#_'>Creating a Future Worth Living</a>
              </h2>
              <p class='text-sm text-gray-500'>
                Learn the attributes you need to gain in order to build a future
                and create a life that you are truly happy with.
              </p>
              <p class='pt-2 text-xs font-medium'>
                <a href='#_' class='mr-1 underline'>
                  Mary Jane
                </a>{' '}
                · <span class='mx-1'>April 17, 2021</span> ·{' '}
                <span class='mx-1 text-gray-600'>3 min. read</span>
              </p>
            </div>

            <div class='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <a href='#_' class='block'>
                <img
                  class='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56'
                  src='https://cdn.devdojo.com/images/may2021/workout.jpg'
                />
              </a>
              <div class='bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block'>
                <span>Health</span>
              </div>
              <h2 class='text-lg font-bold sm:text-xl md:text-2xl'>
                The Healther Version of Yourself
              </h2>
              <p class='text-sm text-gray-500'>
                If you want to excel in life and become a better version of
                yourself, you'll need to upgrade your life.
              </p>
              <p class='pt-2 text-xs font-medium'>
                <a href='#_' class='mr-1 underline'>
                  Fred Jones
                </a>{' '}
                · <span class='mx-1'>April 10, 2021</span> ·{' '}
                <span class='mx-1 text-gray-600'>3 min. read</span>
              </p>
            </div>

            <div class='flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
              <a href='#_' class='block'>
                <img
                  class='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56'
                  src='https://cdn.devdojo.com/images/may2021/food.jpg'
                />
              </a>
              <div class='bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block'>
                <span>Food</span>
              </div>
              <h2 class='text-lg font-bold sm:text-xl md:text-2xl'>
                Enjoy the Meals of the Kings
              </h2>
              <p class='text-sm text-gray-500'>
                Take the time to enjoy the life that you've created. It's
                totally fine to live like kings and eat like royalty.
              </p>
              <p class='pt-2 text-xs font-medium'>
                <a href='#_' class='mr-1 underline'>
                  Mike Roberts
                </a>{' '}
                · <span class='mx-1'>April 6, 2021</span> ·{' '}
                <span class='mx-1 text-gray-600'>3 min. read</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class='flex items-center justify-center py-20 bg-white min-w-screen'>
        <div class='px-16 bg-white'>
          <div class='container flex flex-col items-start mx-auto lg:items-center'>
            <p class='relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center'>
              Don't just take our word for it
            </p>

            <h2 class='relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                class='absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              See what others are saying
            </h2>
            <div class='block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full'></div>

            <div class='items-center justify-center w-full mt-12 mb-4 lg:flex'>
              <div class='flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0'>
                <div class='flex items-center justify-center'>
                  <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                    <img
                      src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80'
                      class='object-cover w-full h-full'
                    />
                  </div>
                  <div class='flex flex-col items-start justify-center'>
                    <h4 class='font-bold text-gray-800'>John Doe</h4>
                    <p class='text-gray-600'>CEO of Something</p>
                  </div>
                </div>
                <blockquote class='mt-8 text-lg text-gray-500'>
                  "This is a no-brainer if you want to take your business to the
                  next level. If you are looking for the ultimate toolset, this
                  is it!"
                </blockquote>
              </div>
              <div class='flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200'>
                <div class='flex items-center justify-center'>
                  <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                    <img
                      src='https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80'
                      class='object-cover w-full h-full'
                    />
                  </div>
                  <div class='flex flex-col items-start justify-center'>
                    <h4 class='font-bold text-gray-800'>Jane Doe</h4>
                    <p class='text-gray-600'>CTO of Business</p>
                  </div>
                </div>
                <blockquote class='mt-8 text-lg text-gray-500'>
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div class='flex flex-col items-start justify-start w-full h-auto lg:w-1/3'>
                <div class='flex items-center justify-center'>
                  <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                    <img
                      src='https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80'
                      class='object-cover w-full h-full'
                    />
                  </div>
                  <div class='flex flex-col items-start justify-center'>
                    <h4 class='font-bold text-gray-800'>John Smith</h4>
                    <p class='text-gray-600'>Creator of Stuff</p>
                  </div>
                </div>
                <blockquote class='mt-8 text-lg text-gray-500'>
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='flex items-center justify-center py-20 bg-white min-w-screen'>
        <div class='flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0'>
          <div class='container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0'>
            <h1 class='relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left'>
              Designed with
              <br class='md:hidden lg:block' />{' '}
              <span class='text-gray-800'>you in mind</span>
            </h1>
            <p class='relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left'>
              We've crafted the ultimate design tool that will help you build
              the design of your dreams. Built with configuration in mind, you
              can fully customize every aspect.
            </p>
            <div class='relative flex mt-4'>
              <a
                href='#_'
                class='flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10'
              >
                Get Started
              </a>
              <a
                href='#_'
                class='relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-purple-500 focus:outline-none md:py-4 md:text-lg xl:text-xl'
              >
                <svg
                  class='absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='text-purple-500'>How It Works</span>
              </a>
            </div>
          </div>
          <div class='relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0'>
            <div class='absolute top-0 left-0 w-11/12 -mt-20 opacity-50'>
              <svg
                class='w-full h-full ml-4 text-purple-100'
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='currentColor'
                  d='M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z'
                  transform='translate(100 100)'
                />
              </svg>
            </div>
            <div class='relative overflow-hidden rounded-md shadow-2xl cursor-pointer group'>
              <div class='absolute flex items-center justify-center w-full h-full'>
                <span class='flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl'>
                  <svg
                    class='w-auto h-8 ml-1 text-white fill-current'
                    viewBox='0 0 52 66'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z'
                      fill-rule='nonzero'
                    />
                  </svg>
                </span>
              </div>
              <img
                src='https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&h=1603&q=80'
                class='z-10 object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section class='py-20 bg-white'>
        <div class='container max-w-6xl mx-auto'>
          <h2 class='text-4xl font-bold tracking-tight text-center'>
            Our Features
          </h2>
          <p class='mt-2 text-lg text-center text-gray-600'>
            Check out our list of awesome features below.
          </p>
          <div class='grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0'>
            <div class='relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
                  <path d='M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5'></path>
                  <circle cx='6' cy='14' r='3'></circle>
                  <path d='M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5'></path>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Certifications</h4>
              <p class='text-base text-center text-gray-500'>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>

            <div class='flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M18 8a3 3 0 0 1 0 6'></path>
                  <path d='M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5'></path>
                  <path d='M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8'></path>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Notifications</h4>
              <p class='text-base text-center text-gray-500'>
                Send out notifications to all your customers to keep them
                engaged.
              </p>
            </div>

            <div class='flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <polyline points='12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3'></polyline>
                  <line x1='12' y1='12' x2='20' y2='7.5'></line>
                  <line x1='12' y1='12' x2='12' y2='21'></line>
                  <line x1='12' y1='12' x2='4' y2='7.5'></line>
                  <line x1='16' y1='5.25' x2='8' y2='9.75'></line>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Bundles</h4>
              <p class='text-base text-center text-gray-500'>
                High-quality bundles of awesome tools to help you out.
              </p>
            </div>

            <div class='flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M8 9l3 3l-3 3'></path>
                  <line x1='13' y1='15' x2='16' y2='15'></line>
                  <rect x='3' y='4' width='18' height='16' rx='2'></rect>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Developer Tools</h4>
              <p class='text-base text-center text-gray-500'>
                Developer tools to help grow your application and keep it
                up-to-date.
              </p>
            </div>

            <div class='flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <line x1='9.5' y1='11' x2='9.51' y2='11'></line>
                  <line x1='14.5' y1='11' x2='14.51' y2='11'></line>
                  <path d='M9.5 15a3.5 3.5 0 0 0 5 0'></path>
                  <path d='M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3'></path>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Building Blocks</h4>
              <p class='text-base text-center text-gray-500'>
                The right kind of building blocks to take your company to the
                next level.
              </p>
            </div>

            <div class='flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl'>
              <div class='p-3 text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-8 h-8 '
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <line x1='15' y1='5' x2='15' y2='7'></line>
                  <line x1='15' y1='11' x2='15' y2='13'></line>
                  <line x1='15' y1='17' x2='15' y2='19'></line>
                  <path d='M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2'></path>
                </svg>
              </div>
              <h4 class='text-xl font-medium text-gray-700'>Coupons</h4>
              <p class='text-base text-center text-gray-500'>
                Coupons system to provide special offers and discounts for your
                app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class='p-10 footer bg-base-200 text-base-content'>
        <div>
          <span class='footer-title'>Services</span>
          <a class='link link-hover'>Branding</a>
          <a class='link link-hover'>Design</a>
          <a class='link link-hover'>Marketing</a>
          <a class='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span class='footer-title'>Company</span>
          <a class='link link-hover'>About us</a>
          <a class='link link-hover'>Contact</a>
          <a class='link link-hover'>Jobs</a>
          <a class='link link-hover'>Press kit</a>
        </div>
        <div>
          <span class='footer-title'>Legal</span>
          <a class='link link-hover'>Terms of use</a>
          <a class='link link-hover'>Privacy policy</a>
          <a class='link link-hover'>Cookie policy</a>
        </div>
      </footer>
      <footer class='px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300'>
        <div class='items-center grid-flow-col'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill-rule='evenodd'
            clip-rule='evenodd'
            class='fill-current'
          >
            <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div class='md:place-self-center md:justify-self-end'>
          <div class='grid grid-flow-col gap-4'>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-current'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-current'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
