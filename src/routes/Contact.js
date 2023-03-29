import Hero from "../Components/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        url="/"
        // btnclass="show"
      />
      <ContactForm/>
        <Footer/>
    </>
  );
}

export default Contact;
