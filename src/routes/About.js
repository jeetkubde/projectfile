import Hero from "../Components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        url="/"
        // btnclass="show"
      />
      <AboutUs/>
      <Footer />
    </>
  );
}

export default About;
