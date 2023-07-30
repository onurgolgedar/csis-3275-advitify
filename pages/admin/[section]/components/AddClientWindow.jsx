"use client"
import { useEffect, useState } from "react"
import styles from "../Admin.module.css";

export default function AddClientWindow({ param }) {
  const { fName, lName, email, phone } = param.searchParams;
  const [input, setInput] = useState({
    type: "client",
    fName: fName ?? "",
    lName: lName ?? "",
    email: email ?? "",
    phone: phone ?? "",
    password: "",
  });

  useEffect(() => {
    setInput({
      type: "client",
      fName: fName ?? "",
      lName: lName ?? "",
      email: email ?? "",
      phone: phone ?? "",
      password: "",
    })
  }, [fName, lName, email, phone])

  function handleInput(event) {
    setInput(prev => {
      return {
        ...prev,
        [event.target.id]: event.target.value
      };
    });
  };

  async function submit() {
    // const data = await fetch("endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(input)
    // });
    console.log(input);
  }

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label className="label" htmlFor="type">Type</label>
        <select id="type" defaultValue="client" onChange={(event) => handleInput(event)}>
          <option value="client">Client</option>
          <option value="consultant">Consultant</option>
        </select>
      </div>
      <div className={styles.field}>
        <div className={styles.field}>
          <label className="label" htmlFor="fName">First Name</label>
          <input className="input" id="fName" type="text" value={input.fName} onChange={(event) => handleInput(event)}></input>
        </div>
        <div className={styles.field}>
          <label htmlFor="lName">Last Name</label>
          <input id="lName" type="text" value={input.lName} onChange={(event) => handleInput(event)}></input>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" value={input.password} onChange={(event) => handleInput(event)}></input>
      </div>
      <div className={styles.field}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={input.email} autoComplete="true" onChange={(event) => handleInput(event)}></input>
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" input-mode="numeric" value={input.phone} autoComplete="true" onChange={(event) => handleInput(event)}></input>
        </div>
      </div>
      <button className={styles.submit} type="button" onClick={() => submit()}>Submit</button>
    </div>
  )
}