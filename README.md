

# HireMe – Real-Time Service Booking Platform

HireMe is a full-stack web application that connects service needers with trusted service providers (electricians, plumbers, mechanics, etc.) in a secure, real-time environment. It includes separate interfaces for Service Needers, Service Providers, and Admins with features like OTP verification, live booking updates, and admin moderation.

---

## 📌 Table of Contents

* Features
* User Roles
* Tech Stack (MERN)
* Project Structure
* Installation
* API Overview
* Future Enhancements
* Screenshots
* Credits

---

## ✅ Features

* Role-based login: Service Needer, Service Provider, Admin
* Secure password hashing and OTP-based reset
* Real-time notifications via Socket.IO
* Service booking with automatic provider matching
* OTP verification for service start
* Admin dashboard for user and request management
* Dynamic status tracking for service requests
* Responsive UI for desktop and mobile

---

## 👤 User Roles

| Role             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Service Needer   | Book services, track progress, reset password via OTP        |
| Service Provider | Register, accept jobs, start services with OTP, edit profile |
| Admin            | Approve/reject providers, view service stats, monitor users  |

---

## 💻 Tech Stack – MERN

| Layer    | Technology                    |
| -------- | ----------------------------- |
| Frontend | React, TypeScript, CSS        |
| Backend  | Node.js, Express.js, Mongoose |
| Database | MongoDB                       |
| Realtime | Socket.IO                     |
| Email    | Nodemailer (Gmail SMTP)       |
| Auth     | JWT + OTP (one-time password) |

---

## 🗂️ Project Structure

├── client (frontend)
│   ├── pages/ (login, booking, dashboard…)
│   ├── components/
│   └── App.tsx, index.tsx, etc.
├── server (backend)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── mailer.js
│   ├── index.js (entry point)
│   └── seedAdmin.js
├── README.md
└── .env

---

## ⚙️ Installation

1. Clone the repo:

git clone [https://github.com/ishfak07/hireme.git](https://github.com/ishfak07/hireme.git)
cd hireme

2. Install frontend & backend dependencies:

cd client
npm install
cd ../server
npm install

3. Setup environment variables:

Create a .env file in /server:

MONGODB\_URI=your\_mongodb\_url
EMAIL\_USER=[youremail@gmail.com](mailto:youremail@gmail.com)
EMAIL\_PASS=your\_app\_password
JWT\_SECRET=your\_jwt\_secret

4. Start the app:

# Start backend

cd server
npm start

# Start frontend

cd client
npm run dev

---

## 🔐 API Endpoints (Brief)

* /api/service-needers/register
* /api/service-needers/login
* /api/service-needers/forgot-password
* /api/service-requests/create
* /api/service-providers/register
* /api/admin/login
* /api/admin/approve/\:id

See full route files in server/routes/

---

## 📈 Future Enhancements

* Add mobile app version (React Native or PWA)
* Integrate online payments (Stripe or PayHere)
* Add customer reviews and ratings
* Enable location-based provider filtering
* Add chat between user and provider

---

