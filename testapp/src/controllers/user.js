const { createToken } = require("../middlewares/auth");

const login = () => {
  try {
    const { email, password } = req.body;
    let userId; //from mongodb;
    // checking the user is exist or not
    //if the user exist and the password is correct
    const token = createToken(userId);
    res.json({ success: true, accessToken: token });
  } catch (error) {
    console.log(error);
  }
};

const register = (req, res) => {
  try {
    const { name, email, phone, place } = req.body;
    // save all the data in mongodb
    res
      .status(201)
      .json({ success: true, message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};

const getAllUsers = (req, res) => {
  try {
    let data = [];
    // retriveing all the user data from the mongodb

    res.status(200).json({
      users: data,
      success: true,
      message: "data retrived successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "something went wrong.." });
  }
};

module.exports = {
  login,
  register,
  getAllUsers,
};
