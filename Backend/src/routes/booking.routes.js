
import express from "express";

import {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
} from "../controllers/booking.controller.js";

import  authenticate  from "../middlewares/auth.middleware.js";

import validate  from "../middlewares/validate.middleware.js";

import {createBookingValidator} from "../validators/booking.validator.js";

const router = express.Router();

router.use(authenticate);

// create Booking
router.post( "/", createBookingValidator, validate, createBooking);

// get Logged In User Bookings
router.get( "/my-bookings",getMyBookings);

// get Single Booking
router.get( "/:id", getBookingById);

// cancel Booking
router.patch( "/:id/cancel", cancelBooking);

export default router;

