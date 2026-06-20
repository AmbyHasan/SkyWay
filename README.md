# ✈️ SkyWay — Full Stack Airline Reservation System

SkyWay is a full-stack airline reservation platform built using the MERN stack. It enables users to search flights, make bookings, manage their reservations, and update their profiles. It also includes a powerful admin dashboard for managing flights, users, bookings, and revenue analytics.

---

## 🌐 Live Demo

| Service           | Link                                                |
| ----------------- | --------------------------------------------------- |
| Frontend          | Add your Vercel deployment URL                      |
| Backend API       | Add your Render deployment URL                      |
| API Documentation | Add Swagger/Postman documentation link if available |

---

## ✨ Key Features

### 👤 User Features

* Register and login securely
* JWT-based authentication
* Search available flights
* Filter flights by route, date, price, airline, and cabin class
* View flight details
* Book flights for multiple passengers
* Automatic seat availability updates
* View booking history
* View booking details
* Cancel bookings
* Automatic seat restoration after cancellation
* Update personal profile
* Responsive user interface

### 🛠️ Admin Features

* Secure admin-only routes
* Dashboard with booking and revenue analytics
* Create, update, and delete flights
* Manage flight status
* Manage users
* Activate or deactivate users
* View and manage all bookings
* Update booking status
* View total users, flights, bookings, and revenue
* Revenue trends and route analytics

---

## 🧰 Tech Stack

### Frontend

| Technology       | Usage                      |
| ---------------- | -------------------------- |
| React 19         | User interface             |
| Vite             | Development and build tool |
| Redux Toolkit    | State management           |
| React Router DOM | Routing                    |
| Axios            | API communication          |
| Tailwind CSS     | Styling                    |
| Framer Motion    | Animations                 |
| React Hook Form  | Form handling              |
| React Hot Toast  | Notifications              |
| Recharts         | Dashboard charts           |

### Backend

| Technology        | Usage                      |
| ----------------- | -------------------------- |
| Node.js           | JavaScript runtime         |
| Express.js        | Backend framework          |
| MongoDB Atlas     | Cloud database             |
| Mongoose          | MongoDB ODM                |
| JWT               | Authentication             |
| bcryptjs          | Password hashing           |
| Express Validator | Request validation         |
| Helmet            | Security headers           |
| CORS              | Cross-origin communication |
| Morgan            | HTTP request logging       |

### Deployment

| Platform      | Usage                  |
| ------------- | ---------------------- |
| Vercel        | Frontend deployment    |
| Render        | Backend deployment     |
| MongoDB Atlas | Cloud database hosting |

---

## 📁 Project Structure

```bash
SkyWay/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── seed/
│   ├── package.json
│   └── README.md
│
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── app/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── README.md
│
├── README.md
└── .gitignore
```

---

## 🏗️ System Architecture

```text
React Frontend
      │
      │ Axios API Requests
      ▼
Node.js + Express.js Backend
      │
      │ Mongoose ODM
      ▼
MongoDB Atlas Database
```

---

## 🔄 Application Flow

### Authentication Flow

```text
User Registers / Logs In
        ↓
Backend Validates Credentials
        ↓
JWT Access and Refresh Tokens Are Generated
        ↓
Frontend Stores Authentication State
        ↓
Protected Routes Become Accessible
```

### Flight Booking Flow

```text
Search Flights
      ↓
Select Flight
      ↓
Add Passenger Details
      ↓
Create Booking
      ↓
Seats Are Reduced
      ↓
Booking Confirmation Generated
```

### Booking Cancellation Flow

```text
User Cancels Booking
      ↓
Booking Status Changes to Cancelled
      ↓
Seats Are Restored Automatically
      ↓
Updated Booking Appears in User Dashboard
```

---

## ⚙️ Local Setup

### Prerequisites

Make sure you have the following installed:

* Node.js version 18 or higher
* npm
* MongoDB Atlas account or local MongoDB instance
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/skyway.git
cd SkyWay
```

---

## 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_access_token_secret
JWT_EXPIRES_IN=15m

JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=7d

NODE_ENV=development

CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

The backend should run on:

```bash
http://localhost:5000
```

---

## 3. Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
```

Create a `.env` file inside the `Frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend server:

```bash
npm run dev
```

The frontend should run on:

```bash
http://localhost:5173
```

---

## 📡 API Modules

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

## 🔐 Security Features

* Password hashing using bcryptjs
* JWT access token authentication
* Refresh token support
* Protected user routes
* Role-based authorization
* Admin-only access control
* Request validation using express-validator
* Security headers using Helmet
* CORS configuration
* Secure error handling
* Seat inventory updates using database transactions

---

## 📊 Admin Dashboard Analytics

The admin dashboard includes:

* Total users
* Total flights
* Total bookings
* Confirmed bookings
* Cancelled bookings
* Revenue analytics
* Monthly revenue trends
* Popular routes
* Recent bookings
* User management controls

---

## 🧪 Modules Implemented

| Module                    | Status      |
| ------------------------- | ----------- |
| Authentication            | ✅ Completed |
| User Management           | ✅ Completed |
| Flight Management         | ✅ Completed |
| Flight Search             | ✅ Completed |
| Booking Management        | ✅ Completed |
| Booking Cancellation      | ✅ Completed |
| Seat Inventory Management | ✅ Completed |
| Admin Dashboard           | ✅ Completed |
| Revenue Analytics         | ✅ Completed |
| Role-Based Access Control | ✅ Completed |
| Responsive Frontend       | ✅ Completed |

---

## 🚀 Deployment

### Frontend Deployment

The frontend can be deployed on Vercel.

```bash
npm run build
```

Set the following environment variable in Vercel:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
```

### Backend Deployment

The backend can be deployed on Render.

Set the following environment variables in Render:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
CLIENT_URL=https://your-frontend-url.vercel.app
NODE_ENV=production
```
---

## 👨‍💻 Author

**Amber Hasan**
