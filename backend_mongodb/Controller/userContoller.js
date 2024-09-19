const User = require("../Model/userModels");
const bcrypt = require('bcrypt');

exports.insertData = async (req, res) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword, // Save the hashed password
    });

    const saveuser = await user.save();
    res.status(200).json(`New user added successfully: ${saveuser}`);
  } catch (err) {
    res.status(400).json(`Something went wrong: ${err}`);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Sign-in successful", user });
  } catch (err) {
    res.status(500).json(`Something went wrong on getUser API: ${err}`);
  }
};
exports.getAllUser = async (req, res) => {
  try{
    const data = await User.find();
    // res.status(200).json({message:'User get sucsses',data})
    res.status(200).json(data);
  }
  catch(err){
    res.status(500).json(`Something went wrong on getUser API: ${err}`);

  }

};

