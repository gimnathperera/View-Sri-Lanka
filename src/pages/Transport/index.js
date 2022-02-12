import Hero from 'src/components/common/Hero';
import Content from 'src/pages/Transport/Content';

import hero from 'src/assets/img/transport/hero.jpg';
import bgImage from 'src/assets/img/transport/bg.jpg';
import BookingAction from 'src/components/common/BookingAction';

const heroList = [
  {
    header: 'Airport & ',
    subHeader: 'City Transfers!',
    description: 'Select a budget taxi from us',
    image: hero,
  },
];
const Transport = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content />
      <BookingAction />
    </div>
  );
};
export default Transport;
