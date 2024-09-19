// controllers/authController.js
const authUser = require('../Model/LoginModel');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const existingUser = await authUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new authUser({ userName, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authUser.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const googleLogin = async (req, res) => {
  const { email, name, googleId } = req.body;

  try {
    let user = await authUser.findOne({ googleId });
    if (!user) {
      user = new User({ email, userName: name, googleId });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { registerUser, loginUser, googleLogin };
