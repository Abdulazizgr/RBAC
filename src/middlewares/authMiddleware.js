import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized access: No valid token provided" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token:", token);
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "my-secret");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res
      .status(403)
      .json({ message: "Forbidden access: Invalid or expired token" });
  }
};

export default verifyToken;
