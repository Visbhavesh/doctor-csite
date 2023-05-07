import React, { useEffect, useState } from "react";

import Service from "../Home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/arifulsajib/fake-data-for-projects/main/healthcare-project/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> OUR MAIN SERVICES
      </h2>
      <p className="text-center fs-5">Human care is more than healthcare. We prefer quality over anything.</p>
      <div className="container">
        <div className="row g-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
