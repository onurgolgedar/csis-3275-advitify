"use client";

import styles from "../signIn/signIn.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../components/useUser";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(
    "Please use your username and password to login."
  );
  const { user, setUser } = useUser();
  console.log(user);
  const router = useRouter();

  const handleGetConsultants = async (e) => {
    console.log(user.data.token);
    e.preventDefault();

    console.log("handleGetConsultants");
    const response = await fetch("/api/consultants", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.data.token}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const { message, data } = await response.json();

    if (response.headers.get("content-type")?.includes("application/json")) {
      const data = response;
      setMessage(data.message);
    } else console.warn("The response was not in JSON format.");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
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

    if (data !== null) {
      sessionStorage.setItem("user", JSON.stringify(data))
      setUser(data);
      router.push("/");
      return;
    } else {
      console.log("Login not successful");
      return;
    }
  };

  return (
    <main className={styles.main}>
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>

        <button type="submit" onClick={handleGetConsultants}>Test GetConsultants</button>

        {message && <div className="message">{message}</div>}
      </div>
    </main>
  );
}
