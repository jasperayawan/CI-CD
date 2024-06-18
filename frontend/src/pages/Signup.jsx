import React, { useState } from "react";
import PageContainer from "../layouts/PageContainer";
import useSignup from "../features/authentication/hooks/useSignup";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [gender, setGender] = useState("");
  const { loading, signup } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      username,
      email,
      password,
      cPassword,
      gender,
    };

    await signup(formData);
  };

  const genderHandleChange = (data) => {
    setGender(data);
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleRegister}
          className="mx-auto max-w-lg flex flex-col gap-y-10 w-full"
        >
          <h1 className="text-2xl uppercase text-center font-semibold">
            Registration
          </h1>
          <div className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-4 py-3 rounded-md border-[1px] border-slate-300"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-3 rounded-md border-[1px] border-slate-300"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md border-[1px] border-slate-300"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-md border-[1px] border-slate-300"
            />
            <input
              type="password"
              placeholder="Confirm you password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              className="px-4 py-3 rounded-md border-[1px] border-slate-300"
            />
            <div className="flex flex-row gap-x-2">
              <label htmlFor="male">
                <input
                  type="radio"
                  checked={gender === "male"}
                  value={gender}
                  onChange={() => genderHandleChange("male")}
                  name=""
                  id="male"
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  checked={gender === "female"}
                  value={gender}
                  onChange={() => genderHandleChange("female")}
                  name=""
                  id="female"
                />
                Female
              </label>
            </div>
            <button
              type="submit"
              className="bg-slate-800 text-slate-100 py-2 rounded-md"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Signup;
