import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorhandler.js";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config({});

export const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(errorHandler(400, "Invalid Credentials"));
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodeToken.id) {
      const dbUser = await User.findById(decodeToken.id);
      req.user = dbUser;
      next();
    } else {
      return next(errorHandler(400, "Not Authorized"));
    }
  } catch (error) {
    next(error);
  }
};
