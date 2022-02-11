import Hero from 'src/components/common/Hero';
import VideoSection from 'src/components/VideoSection';
import Offers from 'src/components/Offers';
import Services from 'src/components/Services';
import Testimonial from 'src/components/Testimonial';

import hero7 from 'src/assets/img/home/hero7.jpg';
import hero2 from 'src/assets/img/home/hero2.jpg';
import hero4 from 'src/assets/img/home/hero4.jpg';

const heroList = [
  {
    header: 'We Travel Beyond',
    subHeader: 'The Extra Ordinary!',
    description: 'Treated like a VIP member, enjoy all the previllages.',
    image: hero7,
  },
  {
    header: 'Premium luxary Travel Service',
    subHeader: 'With Personal Touch',
    description: 'Individual attention to your every need.',
    image: hero2,
  },
  {
    header: 'Premium Features',
    subHeader: 'You Feel Like a VIP on the go',
    description: 'Enjoy the luxury lifestyle while travelling.',
    image: hero4,
  },
];

const Home = () => {
  return (
    <div class=' bg-no-repeat bg-cover bg-fixed bg-[url(https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg)]'>
      <Hero heroList={heroList} />
      <Services />
      <Testimonial />
      <VideoSection />
      <Offers />
    </div>
  );
};
export default Home;
