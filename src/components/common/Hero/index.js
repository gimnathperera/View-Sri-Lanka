import { Carousel } from 'react-responsive-carousel';

import HeroItem from './HeroItem';

const Hero = ({ heroList }) => {
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
          heroList?.map((hero, index) => <HeroItem data={hero} key={index} />)}
      </Carousel>
    </section>
  );
};

export default Hero;
