import React, { useState } from "react";
import "./Register.css"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://127.0.0.1:8000/api/jwtDom/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Registration Successful");
      console.log(data);

      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      alert("Registration Failed");
      console.log(data);
    }
  };

  return (
    <div className="register-container">
  <form className="register-form" onSubmit={registerUser}>
    <h2>Register</h2>

    <input
      type="text"
      placeholder="Enter Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit" className="register-btn">
      Register
    </button>

    <p className="login-link">
      Already have an account? <a href="/login">Login</a>
    </p>
  </form>
</div>
  );
}

export default Register;