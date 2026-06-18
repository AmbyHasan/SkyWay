import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import User from "../models/user.model.js";

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(
        new AppError("Access denied. No token provided.", 401)
      );
    }

    const token = authHeader.split(" ")[1];

    let decoded;

    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(
          new AppError(
            "Your session has expired. Please log in again.",
            401
          )
        );
      }

      return next(
        new AppError(
          "Invalid token. Please log in again.",
          401
        )
      );
    }

    // MISSING PART
    const user = await User.findById(decoded.id).select(
      "+passwordChangedAt"
    );

    if (!user) {
      return next(
        new AppError(
          "User belonging to this token no longer exists.",
          401
        )
      );
    }

    if (!user.isActive) {
      return next(
        new AppError(
          "Your account has been deactivated.",
          403
        )
      );
    }

    if (user.changedPasswordAfter?.(decoded.iat)) {
      return next(
        new AppError(
          "Password was recently changed. Please log in again.",
          401
        )
      );
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;