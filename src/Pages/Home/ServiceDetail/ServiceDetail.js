import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";


const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/arifulsajib/fake-data-for-projects/main/healthcare-project/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const { serviceId } = useParams();
  const specificService = services.find((service) => service.id === serviceId);

  const history = useHistory();
  const handleBackBtn = () => {
    history.push("/services");
  };

  return (
    <div className="service-detail container my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="w-100" src={specificService?.pic} alt="" height="400" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">{specificService?.name}</h1>
            <h6>
              <i className="fas fa-user-nurse"></i> Specialised Doctors: {specificService?.countDoctors}
            </h6>
            <h6>
              <i className="fas fa-calendar-week"></i> Open: {specificService?.openDays}
            </h6>
            <p className="fs-5">{specificService?.details}</p>
            <button onClick={handleBackBtn} className="default-btn">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
