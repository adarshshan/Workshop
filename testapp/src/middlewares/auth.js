const jwt = require("jsonwebtoken");

const secret = "kdkddkdkkdk"; //has to be kept inside .env file

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn: "1d" });
};

module.exports = {
  authMiddleware,
  createToken,
};
