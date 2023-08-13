"use client";
import { useState } from "react";

export default function Register() {
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.message);
        alert(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-black">
      <div className="flex flex-col text-center items-center justify-center pt-20">
        {/* Register API */}

        <h1 className="text-yellow">Register Form</h1>
        <form /*action = "/send-data-here"*/ method="post" className="flex flex-col mt-8 text-center items-center justify-center gap-6">
          {/* <label for="name">Name: </label>
          <input type="text" placeholder="Full Name" />
          <label for="last">Last name:</label> */}
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {
              setregisterData({ ...registerData, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => {
              setregisterData({ ...registerData, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setregisterData({ ...registerData, password: e.target.value });
            }}
          />
          <select
            onChange={(e) => {
              setregisterData({ ...registerData, gender: e.target.value });
            }}
          >
            <option value="" disabled selected hidden>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Age"
            onChange={(e) => {
              setregisterData({ ...registerData, age: e.target.value });
            }}
          />
          <button type="submit" className="custom-button-1" onClick={handleRegister}>
            Register
          </button>
        </form>
        <a className="text-yellow float-right mb-10 mt-3 text-xs" href="/login">
          <p className="">Already have an account? Sign in</p>
        </a>
      </div>
    </main>
  );
}
