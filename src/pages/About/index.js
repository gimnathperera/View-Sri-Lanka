import Hero from 'src/components/common/Hero';
import Content from 'src/pages/About/Content';
import Team from 'src/pages/About/Team';
import bgImage from 'src/assets/img/about/bg.jpg';

import qa from 'src/assets/img/home/qa.jpg';

const heroList = [
  {
    header: 'About Views',
    subHeader: 'Lanka Tours!',
    description: 'Discover who are we?',
    image: qa,
  },
];

export const About = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content />
      <Team />
    </div>
  );
};
export default About;
