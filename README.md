# 📇 Contact & Appointment Manager

A simple React application to manage contacts and appointments. Users can add new contacts with a name, phone number, and email address, and then schedule appointments by selecting a contact, setting a date and time, and adding a title.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## 🚀 Features

- Add, view, and manage contact information
- Schedule appointments with existing contacts
- Duplicate name prevention in contacts
- Form validation including Romanian phone number format
- Clean separation of components using React functional components and hooks

---

## 🧩 Components

- `ContactForm`: Controlled form for adding a contact
- `AppointmentForm`: Controlled form for scheduling appointments
- `ContactPicker`: Dropdown menu populated with contact names
- `TileList`: Renders contact and appointment data using `Tile`
- `Tile`: Displays individual contact or appointment info

---

## 🖥️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Killerbee663/contact-appointment-manager.git
cd contact-appointment-manager
npm install

--

Run the app

npm start

--

📜 Romanian Phone Number Pattern

In the contact form, the phone number input uses this pattern:
pattern="(\+40|0)(2|3|7|6)[0-9]{8}"
This ensures numbers begin with +40 or 0 and follow Romanian mobile/landline format.

--

📦 Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

npm test
Launches the test runner in the interactive watch mode.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for best performance.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

This will copy all the configuration files and dependencies into your project, giving you full control.

