import Hero from 'src/components/common/Hero';
import Quesions from 'src/pages/FAQ/Quesions';
import bgImage from 'src/assets/img/faq/bg.jpg';

import qa from 'src/assets/img/home/qa.jpg';

const heroList = [
  {
    header: 'Frequently',
    subHeader: 'Asked Questions!',
    description: 'Got a question? We’ve got answers.',
    image: qa,
  },
];
const FAQ = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Quesions />
    </div>
  );
};
export default FAQ;
