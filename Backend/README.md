# ✈️ SkyWay Airline Reservation System - Backend

A production-ready Airline Reservation System backend built using **Node.js, Express.js, MongoDB, and Mongoose**.

The system supports flight management, booking management, JWT authentication, refresh tokens, role-based authorization, seat inventory tracking, and administrative analytics.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT Access Tokens
* Refresh Tokens
* Secure Logout
* Protected Routes
* Role-Based Access Control (User/Admin)

### ✈️ Flight Management

* Create Flights
* Update Flights
* Delete Flights
* Search Flights
* Filter Flights
* Flight Status Tracking
* Economy & Business Cabins
* Seat Availability Management

### 🎟️ Booking Management

* Create Booking
* View My Bookings
* View Booking Details
* Cancel Booking
* Automatic Seat Deduction
* Automatic Seat Restoration
* Booking Reference Generation
* Multi-Passenger Booking Support

### 📊 Admin Dashboard

* Dashboard Statistics
* Revenue Analytics
* User Management
* Booking Management
* User Activation / Deactivation
* Booking Status Updates

---

## 🛠 Tech Stack

| Technology        | Usage                |
| ----------------- | -------------------- |
| Node.js           | Runtime              |
| Express.js        | Backend Framework    |
| MongoDB           | Database             |
| Mongoose          | ODM                  |
| JWT               | Authentication       |
| bcryptjs          | Password Hashing     |
| Express Validator | Request Validation   |
| Morgan            | Logging              |
| Helmet            | Security             |
| CORS              | Cross-Origin Support |

---

## 📂 Project Structure

```bash
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── flight.controller.js
│   ├── booking.controller.js
│   └── admin.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── role.middleware.js
│   ├── validate.middleware.js
│   └── error.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── flight.model.js
│   ├── booking.model.js
│   └── refreshToken.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── flight.routes.js
│   ├── booking.routes.js
│   └── admin.routes.js
│
├── validators/
│
├── utils/
│
├── app.js
└── server.js
```

---

## 🔄 Application Workflow

### Flight Booking Flow

```text
User Login
    ↓
Search Flights
    ↓
Select Flight
    ↓
Add Passenger Details
    ↓
Create Booking
    ↓
Seats Reduced
    ↓
Booking Confirmed
```

### Booking Cancellation Flow

```text
Cancel Booking
    ↓
Booking Status Updated
    ↓
Seats Restored
    ↓
Cancellation Recorded
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
POST /api/auth/logout
```

### Users

```http
GET    /api/users/me
PATCH  /api/users/me
```

### Flights

```http
GET    /api/flights
GET    /api/flights/:id
POST   /api/flights
PATCH  /api/flights/:id
DELETE /api/flights/:id
```

### Bookings

```http
POST   /api/bookings
GET    /api/bookings/my-bookings
GET    /api/bookings/:id
PATCH  /api/bookings/:id/cancel
```

### Admin

```http
GET    /api/admin/stats
GET    /api/admin/revenue

GET    /api/admin/users
GET    /api/admin/users/:id
PATCH  /api/admin/users/:id/status

GET    /api/admin/bookings
PATCH  /api/admin/bookings/:id/status
```

---

## 📈 Admin Analytics

The admin dashboard provides:

* Total Users
* Total Flights
* Total Bookings
* Confirmed Bookings
* Cancelled Bookings
* Monthly Revenue
* Revenue Trends
* Top Routes
* Recent Bookings

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m

JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d

NODE_ENV=development
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/skyway-backend.git
cd skyway-backend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

---

## 🧪 Tested Modules

* ✅ Authentication Module
* ✅ User Module
* ✅ Flight Module
* ✅ Booking Module
* ✅ Admin Module
* ✅ Revenue Analytics
* ✅ Role-Based Access Control
* ✅ MongoDB Transactions

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes
* Role-Based Authorization
* Request Validation
* Secure Error Handling
* Transaction-Based Seat Management


## 👨‍💻 Author

**Amber Hasan**


