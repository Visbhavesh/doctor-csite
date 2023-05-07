import React, { useEffect, useState } from "react";

import Doctor from "../Home/Doctor/Doctor";

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/arifulsajib/fake-data-for-projects/main/healthcare-project/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">Request Appointment</h2>
      <p className="text-center fs-5">Make sure to make an appointment before visiting our clinic</p>
      <div className="container">
        <div className="row g-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
