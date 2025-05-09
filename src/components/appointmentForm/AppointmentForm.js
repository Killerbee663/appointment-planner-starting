import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
          required
        />
        <input
          type="date"
          min={getTodayString()}
          value={date}
          name="date"
          onChange={(e) => setDate(e.target.value)}
          placeholder="enter the date"
          required
        />
        <input
          type="time"
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
          placeholder="enter time"
          required
        />
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          name={contact}
        />
        <input type="submit" />
      </form>
    </>
  );
};
