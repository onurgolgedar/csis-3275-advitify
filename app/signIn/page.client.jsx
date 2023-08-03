"use client";

import styles from "../signIn/signIn.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(
    "Please use your email and password to login."
  );

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const { data }= await response.json();
    console.log("Response Data:", data.user);
    if(data.user !== null){
      console.log("Login successfull")
      sessionStorage.setItem("user",JSON.stringify(data.user))
      router.push('/')
      return
    }
    else{
      console.log("Login not successfull")
      return
    }
    
    if (response.headers.get("content-type")?.includes("application/json")) {
      const data = response;
      console.log(data);
      setMessage(data.message);
      

    } else console.warn("The response was not in JSON format.");
  };

  return (
    <main className={styles.main}>
      {}

      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
    </main>
  );
}
