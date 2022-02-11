import Hero from 'src/components/common/Hero';
import Form from 'src/pages/Contact/Form';

import bgImage from 'src/assets/img/contact/tel1.jpg';
import laptop from 'src/assets/img/contact/tel2.jpg';

const heroList = [
  {
    header: 'Frequently',
    subHeader: 'Asked Questions!',
    description: 'Got a question? We’ve got answers.',
    image: laptop,
  },
];

export const ContactUs = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Form />
    </div>
  );
};
export default ContactUs;
