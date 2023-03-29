import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="Destination">
      <h1> Popular Destination</h1>
      <p>Tours give You The Opportunity To See a Lot, Within a time Frame.</p>

      <DestinationData
      className="first-des"
        heading="Taal Volcano, Batangas"
        text=" From popular city beaches to hidden gems, there is an abundance of
      beautiful beaches across the country. Qatar enjoys pleasant weather
      all year long and is ideal for sun-seekers and those who want to
      refuel and rejuvenate. Enjoy the unspoiled sandy beaches with your
      loved ones with a 24-hour itinerary"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a 
        little more challenging but still good for a beginner mountaineer, 
        check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the 
        beach and pass through tropical forest, different rock formations, and small streams. 
        There's a small store halfway up the trail where you can take a break and drink buko juice,
         and though the summit itself may not have the best view, the breeze is fantastic.
          Once you've made it back down, head straight to the beach for a refreshing. well-deserved swim."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
