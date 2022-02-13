import Hero from 'src/components/common/Hero';
import Content from 'src/pages/TourPackage/Content';

import bgImage from 'src/assets/img/tour/bg.jpg';
import qa from 'src/assets/img/tour/hero.jpg';

const heroList = [
  {
    header: 'Tour Packages In',
    subHeader: 'Sri Lanka!',
    description: 'Select a tour package and read more',
    image: qa,
  },
];
const TourPackage = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content />
    </div>
  );
};
export default TourPackage;
