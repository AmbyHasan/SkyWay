# ✈️ SkyWay Airline Reservation System — Frontend

A modern, responsive, and user-friendly frontend for the **SkyWay Airline Reservation System**. It allows users to search flights, book tickets, manage bookings, update profiles, and provides a dedicated dashboard for administrators to manage flights, users, bookings, and analytics.

Built as part of a full-stack MERN project.

---

## 🌐 Live Demo

* **Frontend:** Add your Vercel deployment URL here
* **Backend API:** Add your Render deployment URL here

---

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Protected routes for authenticated users
* Flight search and filtering
* Flight details page
* Passenger details form
* Flight booking flow
* Booking confirmation page
* View all personal bookings
* View individual booking details
* Cancel bookings
* Profile management
* Logout functionality
* Responsive design for desktop, tablet, and mobile devices
* Toast notifications for success and error messages

### 🛠️ Admin Features

* Admin-only protected dashboard
* Dashboard statistics and analytics
* Manage flights
* Add new flights
* Edit existing flights
* Delete flights
* Manage users
* Activate or deactivate users
* Manage bookings
* Update booking status
* Revenue and booking analytics
* Charts for dashboard insights

---

## 🧰 Tech Stack

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| React 19         | Frontend library                       |
| Vite             | Fast development server and build tool |
| React Router DOM | Client-side routing                    |
| Redux Toolkit    | Global state management                |
| React Redux      | Connects Redux with React              |
| Axios            | API requests                           |
| Tailwind CSS     | Styling and responsive UI              |
| Framer Motion    | Smooth animations                      |
| React Hook Form  | Form handling and validation           |
| React Hot Toast  | Notifications                          |
| Lucide React     | Modern icons                           |
| React Icons      | Additional icon library                |
| Recharts         | Admin dashboard charts                 |
| ESLint           | Code quality and linting               |

---

## 📁 Project Structure

```bash
Frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   └── axios.js
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── flight/
│   │   ├── booking/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── flights/
│   │   ├── bookings/
│   │   └── admin/
│   │
│   ├── hooks/
│   │
│   ├── pages/
│   │   ├── public/
│   │   ├── user/
│   │   └── admin/
│   │
│   ├── routes/
│   │   ├── AppRouter.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── AdminRoute.jsx
│   │
│   ├── store/
│   │   └── slices/
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Main Pages

### Public Pages

* Home / Landing Page
* Login Page
* Register Page
* Flight Search Results Page
* Flight Details Page

### User Pages

* Booking Page
* Booking Success Page
* My Bookings Page
* Booking Details Page
* Profile Page

### Admin Pages

* Admin Dashboard
* Manage Flights Page
* Add Flight Page
* Edit Flight Page
* Manage Users Page
* Manage Bookings Page
* Revenue Analytics Page

---

## ⚙️ Environment Variables

Create a `.env` file inside the `Frontend` folder.

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For production, replace the local URL with your deployed backend URL:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
```

> Never commit your `.env` file to GitHub.

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skyway.git
```

### 2. Navigate to the Frontend Folder

```bash
cd SkyWay/Frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will run on:

```bash
http://localhost:5173
```

---

## 📦 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Creates an optimized production build |
| `npm run preview` | Runs the production build locally     |
| `npm run lint`    | Checks code quality using ESLint      |

---

## 🔐 Authentication Flow

```text
User Registers / Logs In
        ↓
Backend Returns Access Token
        ↓
Frontend Stores Authentication State
        ↓
Protected Routes Become Accessible
        ↓
User Can Book Flights and Manage Bookings
```

For admin users:

```text
Admin Logs In
        ↓
Role is Verified
        ↓
Admin Routes Become Accessible
        ↓
Admin Can Manage Flights, Users, and Bookings
```

---

## ✈️ Flight Booking Flow

```text
Search Flights
      ↓
View Available Flights
      ↓
Select a Flight
      ↓
Enter Passenger Details
      ↓
Confirm Booking
      ↓
Booking Created Successfully
      ↓
View Booking in My Bookings
```

---

## 🔗 Backend Repository

This frontend connects with the SkyWay backend API.

The backend provides:

* Authentication APIs
* Flight management APIs
* Booking management APIs
* User profile APIs
* Admin analytics APIs
* Role-based authorization
* Secure JWT authentication

Backend README: Add your backend repository link here.

---

## 📱 Responsive Design

The frontend is designed to work smoothly across:

* Desktop screens
* Laptops
* Tablets
* Mobile devices

Tailwind CSS is used to create a responsive and consistent design system.

---

## 🔒 Security Considerations

* Protected routes for authenticated users
* Admin-only routes for authorized administrators
* JWT authentication
* API base URL stored in environment variables
* Form validation before API requests
* Secure error handling and toast feedback

---

## 👨‍💻 Author

**Amber Hasan**

---

