import Hero from "../Components/Hero";
import AboutImg from "../assets/3.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="service"
        url="/"
        // btnclass="show"
      />
      <Trip/>
      
      <Footer/>
    </>
  );
}

export default Service;
