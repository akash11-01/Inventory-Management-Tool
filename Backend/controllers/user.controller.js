import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/errorhandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(errorHandler(400, "Fill all Details"));
    }

    const isExistingUser = await User.findOne({ username: username });
    if (isExistingUser) {
      return next(errorHandler(409, "User Already exist"));
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .cookie("access_token", access_token, {
        httpOnly: true,
      })
      .status(201)
      .json({ success: true, message: "user registered" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(errorHandler(400, "All fields are required"));
    }
    const user = await User.findOne({ username });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }
    const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .cookie("access_token", access_token, {
        httpOnly: true,
      })
      .status(200)
      .json({ success: true, message: "user logged in", access_token });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

export const isAuth = async (req, res, next) => {
  try {
    const user = req.user;
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res) => {
  try {
    res
      .clearCookie("token", { httpOnly: true })
      .status(200)
      .json({ success: true, message: "Logged out" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
