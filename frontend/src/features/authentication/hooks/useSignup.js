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
      console.log(res.data);
    } catch (error) {
      console.log(error);
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
