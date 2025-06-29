import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import geturl from "../utils/datauri.js";
import cloudinary from "../utils/Cloudinary.js";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    console.log(fullname, email, phoneNumber, password, role);

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }

    if (!fullname) {
      return res.status(400).json({
        message: "fullname is missing",
        success: false,
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "email is missing",
        success: false,
      });
    }

    if (!phoneNumber) {
      return res.status(400).json({
        message: "phoneNumber is missing",
        success: false,
      });
    }

    if (!password || !role) {
      return res.status(400).json({
        message: "password is missing",
        success: false,
      });
    }

    if (!role) {
      return res.status(400).json({
        message: "role is missing",
        success: false,
      });
    }

    const file = req.file;
    const fileuri = geturl(file);
    const cloudinaryresponse = await cloudinary.uploader.upload(
      fileuri.content
    );
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "email already exists",
        success: false,
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedpassword,
      role,
      profile: {
        prfilephoto:cloudinaryresponse.secure_url,
      },
    });

    return res.status(201).json({
      message: "account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log(email, password, role);
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const ispasswordcorrect = await bcrypt.compare(password, user.password);
    if (!ispasswordcorrect) {
      return res.status(400).json({
        message: "password is incorrect",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "user dosent exists for this role",
        success: false,
      });
    }
    const tokendata = {
      userId: user._id,
    };
    const token = jwt.sign(tokendata, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .json({
        message: `welcome back ${user.fullname}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateprofile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    // if(!fullname||!email||!phoneNumber||!bio||!skills){
    //     return res.status(400).json({
    //         message:"something is missing",
    //         success:false
    //     })
    // }
    //cloudinary comes here
    const fileurl = geturl(file);
    const cloudinaryresponse = await cloudinary.uploader.upload(
      fileurl.content
    );

    let skillsary;
    if (skills) {
      skillsary = skills.split(",");
    }

    const userId = req._id;
    let user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({
        message: "user dosent exists",
        success: false,
      });
    }
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsary;

    //resume are pwnding
    if (cloudinaryresponse) {
      user.profile.resume = cloudinaryresponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
