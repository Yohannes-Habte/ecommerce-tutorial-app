import User from "../../models/user/model.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      success: true,
      count: users.length,
      result: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while fetching users",
    });
  }
};

// Get single user by ID
export const getSingleUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      result: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error.message);

    // Handle invalid MongoDB ObjectId
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while fetching user",
    });
  }
};
