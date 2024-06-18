import React, { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState();

  const signup = async (formData) => {
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );
      if (res.status === 200) {
        alert("user created succesfully!");
      }
    } catch (error) {
      alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signup,
  };
};

export default useSignup;
