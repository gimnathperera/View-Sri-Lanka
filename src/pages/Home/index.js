import Hero from 'src/components/Hero';
import VideoSection from 'src/components/VideoSection';
import Offers from 'src/components/Offers';
import Services from 'src/components/Services';
import Testimonial from 'src/components/Testimonial';

const Home = () => {
  return (
    <div class=' bg-no-repeat bg-cover bg-fixed bg-[url(https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg)]'>
      <Hero />
      <Services />
      <Testimonial />
      <VideoSection />
      <Offers />
    </div>
  );
};
export default Home;
