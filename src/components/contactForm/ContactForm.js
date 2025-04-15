import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter your name"
          required
        />
        <input
          type="tel"
          name="phone"
          pattern="(\+40|0)(2|3|7|6)[0-9]{8}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="enter your phone number"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your E-mail"
          required
        />
        <input
          type="submit"
          name="submit"
        />
      </form>
    </>
  );
};
