import React from "react";

export const ContactPicker = ({ contacts, value, onChange, name }) => {
  return (
    <>
      <select
        onChange={onChange}
        value={value}
        name={name}
      >
        <option value="">No Contact Selected</option>
        {contacts.map(({ name }, index) => (
          <option
            key={index}
            value={name}
          >
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
