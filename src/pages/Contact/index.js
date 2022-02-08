import ContactHero from 'src/components/ContactHero';
import Form from 'src/pages/Contact/Form';
import bgImage from 'src/assets/img/contact/tel1.jpg';

export const ContactUs = () => {
  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <ContactHero />
      <Form />
    </div>
  );
};
export default ContactUs;
