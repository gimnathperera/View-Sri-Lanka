import Hero from 'src/components/common/Hero';
import Content from 'src/pages/Destination/Content';

import bgImage from 'src/assets/img/faq/bg.jpg';
import qa from 'src/assets/img/home/qa.jpg';

const heroList = [
  {
    header: 'Destinations In',
    subHeader: 'Sri Lanka!',
    description: 'Select a destination and read more',
    image: qa,
  },
];
const Destination = () => {
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
export default Destination;
