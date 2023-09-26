import "dotenv/config";
import jwt from "jsonwebtoken";
import db from "../application/database.js";

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //GET USERS FROM DB
    const users = db.users.filter(
      (user) => user.username === username && user.password === password
    );

    //CHECK THE USER ENSURE IS IN THE DB
    if (!users.length)
      return res.status(401).json({ message: "Authentication failed" });

    //GENERATE ACCESS AND REFRESH TOKEN
    const accessToken = generateAccessToken({ username: users[0].userneme });
    const refreshToken = generateRefreshToken({ username: users[0].userneme });

    //ADD REFRESH TOKEN TO DB
    db.refresh_token.push(refreshToken);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const refresh = async (req, res, next) => {
  try {
    const { token } = req.body;

    //CHECK TOKEN IS VALID
    if (!token || !db.refresh_token.find((token) => token === token))
      return res.status(401).json({ message: "Invalid token" });

    //VERIFY REFRESH TOKEN AND GENERATE NEW TOKEN
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });

      const accessToken = generateAccessToken({ username: user.username });
      res.json({ accessToken });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//FUNCTIONS TO GENERATE TOKEN
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

export default { refresh, login };
