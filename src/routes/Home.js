import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";


function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1510227320292-0811fae44991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttontext="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer/>
    </>
  );
}

export default Home;
