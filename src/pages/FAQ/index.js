import FaqHero from 'src/components/FaqHero';
import Quesions from 'src/pages/FAQ/Quesions';
import bgImage from 'src/assets/img/faq/bg.jpg';

const FAQ = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <FaqHero />
      <Quesions />
    </div>
  );
};
export default FAQ;
