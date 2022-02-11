import AboutHero from 'src/components/AboutHero';
import Content from 'src/pages/About/Content';
import Team from 'src/pages/About/Team';
import bgImage from 'src/assets/img/about/bg.jpg';

export const About = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <AboutHero />
      <Content />
      <Team />
    </div>
  );
};
export default About;
