import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;

export const validateSearchInput = (req, res, next) => {
    const { searchTerm } = req.body;
    if (!searchTerm || typeof searchTerm !== 'string') {
      return res.status(400).json({ error: 'Invalid search term' });
    }
    next();
  };

export default validateSearchInput;