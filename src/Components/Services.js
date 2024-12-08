import ServiceCard from "./ServiceCard"
import { useState } from "react"
const Service = () => {
    const [services, setServices] = useState([
        {
            title: "Weed and Seed",
            description: "Give your lawn the perfect foundation with our Weed and Seed service. We’ll carefully remove weeds and apply high-quality seed to ensure a lush, green lawn that thrives year-round. Say goodbye to unwanted weeds and hello to healthy grass!"
          },
          {
            title: "Cleaning Flower Beds",
            description: "Make your garden shine with our Flower Bed Cleaning service. We’ll clear out debris, dead plants, and weeds, leaving your flower beds neat and ready for new plants. Let us create a fresh, vibrant space that enhances the beauty of your outdoor area."
          },
          {
            title: "Hedge Bushes",
            description: "Maintain the shape and health of your hedges with our expert Hedge Bush service. Our team will trim and shape your bushes to perfection, ensuring they complement your landscape and thrive in every season. Enjoy well-kept, beautiful hedges all year long."
          },
          {
            title: "Mowing",
            description: "Keep your lawn looking sharp with our professional Mowing service. We provide regular mowing to maintain a clean, manicured appearance, ensuring your grass stays healthy and well-groomed. Let us take care of your lawn so you can enjoy a pristine outdoor space."
          }
    ])
    return (
      <div style={{width: '100%', }} className="serviceBox">
        <h1>Services</h1>
          <div className="serviceContainer">
            {services.map(service => <ServiceCard service={service}/>)}
        </div>
      </div>

    )
}

export default Service