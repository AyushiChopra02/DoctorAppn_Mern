import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import Doctor from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

// ✅ API to add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !available ||
      !fees ||
      !address
    ) {
      return res.json({ status: 'failed', message: 'Missing details' });
    }

    if (!validator.isEmail(email)) {
      return res.json({ status: 'failed', message: 'Please enter a valid email' });
    }

    if (password.length < 8) {
      return res.json({ status: 'failed', message: 'Please enter a strong password' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: 'image',
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: 'Doctor added successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: 'failed', message: 'Internal server error' });
  }
};

// ✅ Admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: 'failed', message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: 'failed', message: 'Internal server error' });
  }
};

export { addDoctor, loginAdmin };
