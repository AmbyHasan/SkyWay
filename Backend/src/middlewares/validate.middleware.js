
import { validationResult} from 'express-validator';
import AppError from '../utils/AppError.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    const formattedErrors = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));

    return next(new AppError('Validation failed', 422, formattedErrors));
  }

  next();
};

export default validate;
