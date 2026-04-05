import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../api/baseApi";

// Step 1: Create context with a clear default structure
const AuthContext = createContext(null);

// Step 2: Create provider component to manage user state and provide it to the app
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data on component mount
  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${baseURL}/auth/me`, {
        withCredentials: true,
      });

      setUser(data.result);
      setError(null);
    } catch (err) {
      setUser(null);
      setError(err.response?.data?.message || "Not authenticated");
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(`${baseURL}/auth/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error(
        "Logout failed:",
        err.response?.data?.message || err.message,
      );
    } finally {
      // Clear user state no matter what
      setUser(null);
      setError(null);
      setLoading(false);
      navigate("/login"); // redirect after logout
    }
  };

  // ----------------------
  // Load user on mount
  // ----------------------
  useEffect(() => {
    fetchUser();
  }, []);

  // Value is used to store user data and actions with the rest of the app
  const value = {
    user,
    loading,
    error,
    fetchUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Step 3: Create a custom hook for consuming the context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
