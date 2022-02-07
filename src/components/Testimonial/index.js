const Testimonial = () => {
  return (
    <section class='flex items-center justify-center py-20 min-w-screen'>
      <div class='px-16'>
        <div class='container flex flex-col items-start mx-auto lg:items-center  backdrop-blur-2xl p-10'>
          <p class='relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-[#E5E7EB] uppercase lg:justify-center lg:items-center'>
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
                next level. If you are looking for the ultimate toolset, this is
                it!"
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
                "Packed with awesome content and exactly what I was looking for.
                I would highly recommend this to anyone."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
