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
  const router = useRouter();

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

    if (data.success) {
      sessionStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      router.push("/");
      return;
    } else {
      window.alert("Login failed");
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
      </div>
    </main>
  );
}
