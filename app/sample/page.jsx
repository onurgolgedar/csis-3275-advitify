"use client";

import styles from "./sample.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SampleComponent from "./sampleComponent/sampleComponent";

export default function Sample() {
  const [counter, setCounter] = useState(0);

  const defaultMessage = "fetched data goes here :)";
  const [fetchData, setFetchData] = useState(defaultMessage);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  async function getRequest() {
    const response = await fetch("/api/fetchSample", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json();
    console.log(body);
    setFetchData(body.data.message);
  }

  async function postRequest() {
    // define request body
    const requestBody = {
      text: "this is from sample page",
    };

    const response = await fetch("/api/fetchSample", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const { data } = await response.json();
    console.log(data);
    setFetchData(data.message);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>This is a sample page</h1>
        <section>
          <h2>Link</h2>
          <div className={styles.link}>
            <p>Link to other component, use &lt;Link&gt; tag</p>
            <Link href="/">Link to Main page</Link>
          </div>
          <div className={styles.link}>
            <p>Link to external website, use &lt;a&gt; tag</p>
            <a href="https://nextjs.org/docs/pages/api-reference/components/link">
              Link Document
            </a>
          </div>
        </section>

        <section>
          <h2>Image</h2>
          <Image
            src="/main_image1.png"
            alt="main_image1"
            width={400}
            height={200}
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL={"/main_image1.png"}
          />
          <div className={styles.link}>
            <a href="https://nextjs.org/docs/pages/api-reference/components/image">
              Image Document
            </a>
          </div>
        </section>

        <section>
          <h2>useState</h2>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(0)}>reset</button>
          <div className={styles.link}>
            <a href="https://legacy.reactjs.org/docs/hooks-state.html">
              useState Document
            </a>
          </div>
        </section>

        <section>
          <h2>Fetch data</h2>
          <p>{fetchData}</p>
          <button onClick={() => getRequest()}>GET request</button>
          <button onClick={() => postRequest()}>POST request</button>
          <button onClick={() => setFetchData(defaultMessage)}>reset</button>
          <div className={styles.link}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
              Fetch API Document
            </a>
          </div>
        </section>

        <section>
          <h2>Array Mapping</h2>
          {days.map((day, index) => {
            return (
              <div key={index}>
                <p>{day}</p>
              </div>
            );
          })}
          <div className={styles.link}>
            <a href="https://react.dev/learn/rendering-lists">
              Data Mapping Document
            </a>
          </div>
        </section>

        <section>
          <h2>Child Component and Props</h2>
          <SampleComponent props={"this string is from parent"} toChild={100} />
          <div className={styles.link}>
            <a href="https://react.dev/learn/passing-props-to-a-component">
              Child Component and Props Document
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
