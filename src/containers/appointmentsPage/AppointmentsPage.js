import React, { useState } from "react";

import { AppointmentForm } from "./../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
	contacts,
	appointments,
	addAppointments,
}) => {
	/*
  Define state variables for 
  appointment info
  */
	const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
	const [contact, setContact] = useState("");

	const [date, setDate] = useState("");

	const [time, setTime] = useState("");

    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
