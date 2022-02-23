import Hero from 'src/components/common/Hero';
import BookingAction from 'src/components/common/BookingAction';
import Form from 'src/pages/CustomTour/Form';

import bgImage from 'src/assets/img/contact/tel1.jpg';
import laptop from 'src/assets/img/contact/tel2.jpg';

const heroList = [
  {
    header: 'Make a your own',
    subHeader: 'Tour Plan!',
    description: 'Customize a trip',
    image: laptop,
  },
];

export const CustomTour = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Form />
      <BookingAction />
    </div>
  );
};
export default CustomTour;
