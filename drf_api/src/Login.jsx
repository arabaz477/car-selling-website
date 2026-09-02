import React, { useState } from "react";
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/jwtDom/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      alert("Login Successful");
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
     <div className="login-container">
    <form className="login-form" onSubmit={loginUser}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  </div>
  );
}

export default Login;