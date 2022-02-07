import { Carousel } from 'react-responsive-carousel';

const heroList = [
  {
    header: 'We Travel Beyond',
    subHeader: 'The Extra Ordinary!',
    description: 'Treated like a VIP member, enjoy all the previllages.',
    image: 'https://cdn.devdojo.com/images/november2020/hero-image.jpeg',
  },
  {
    header: 'Premium luxary Travel Service',
    subHeader: 'With Personal Touch',
    description: 'Individual attention to your every need.',
    image: 'https://cdn.devdojo.com/images/november2020/hero-image.jpeg',
  },
  {
    header: 'Premium Features',
    subHeader: 'You Feel Like a VIP on the go',
    description: 'Enjoy the luxury lifestyle while travelling.',
    image: 'https://cdn.devdojo.com/images/november2020/hero-image.jpeg',
  },
];

const HeroComponent = ({ data }) => {
  const { header, subHeader, description, image } = data;
  return (
    <div class='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
      <div class='flex flex-wrap items-center sm:-mx-3 backdrop-blur-xl p-10'>
        <div class='w-full md:w-1/2 md:px-3'>
          <div class='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 text-left'>
            <h1 class='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
              <span class='block'>{header}</span>
              <span class='block text-white'>{subHeader}</span>
            </h1>
            <p class='mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl'>
              {description}
            </p>
            <div class='relative flex flex-col sm:flex-row sm:space-x-4'>
              <a
                href='#_'
                class='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto'
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
            <img src={image} alt='hero_image' />
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section class='px-2 py-32 md:px-0'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        axis={'vertical'}
        
      >
        {heroList &&
          heroList?.map((hero, index) => (
            <HeroComponent data={hero} key={index} />
          ))}
      </Carousel>
    </section>
  );
};

export default Hero;
