"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    branch: "",
  });

  // Create Hook router to use in button or to navigate
  const router = useRouter();

  // Create function to Hook router using button or to navigate automatically
  const navigate = (page_link) => {
    router.push(page_link);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/register`, {
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
        if (data.message === "User registered successfully")
          navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-slate-300 p-4">
      <div className="flex flex-col text-center items-center justify-center py-20">
        <div className="p-8 border-4 border-yellow bg-black shadow-2xl rounded-3xl">
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
            <input
              type="text"
              placeholder="Weight (in KG)"
              onChange={(e) => {
                setregisterData({ ...registerData, weight: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Height (in cm)"
              onChange={(e) => {
                setregisterData({ ...registerData, height: e.target.value });
              }}
            />
            <select
              onChange={(e) => {
                setregisterData({ ...registerData, branch: e.target.value });
              }}
            >
              <option value="" disabled selected hidden>
                Desired Branch
              </option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
            </select>
            <button type="submit" className="custom-button-1" onClick={handleRegister}>
              Register
            </button>
          </form>
          <a className="text-yellow float-right mb-10 mt-3 text-xs" href="/login">
            <p className="">Already have an account? Sign in..</p>
          </a>
        </div>
      </div>
    </main>
  );
}
