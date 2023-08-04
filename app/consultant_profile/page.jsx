"use client";
import styles from "./container.module.css";
import data from "./test.json";
import Image from "next/image";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";



const price = [
  {
    Rating: "5/5",
    Comment: "Best consultant out there"
  },
  {
    Rating: "5/5",
    Comment: "Best consultant out there"
  },
  {
    Rating: "5/5",
    Comment: "Best consultant out there"
  },
]


const about = [
  {
    About: "Working with this professional was an absolute pleasure!"
  }
 
]

export default function Consultant() {
  const [value, onChange] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [activeTab, setActiveTab] = useState("schedule"); // Default active tab is "schedule"

  function a(e) {
    console.log(e.getDate());
  }

  function handleHourClick(hour) {
    setSelectedHour(hour);
  }

  const hoursArray = Array.from({ length: 24 }, (_, index) => index);

  // Determine whether to show the Calendar based on the activeTab
  const showCalendar = activeTab === "schedule";

  return (
    <div className={styles.container}>
      <div className={styles.flexboxItem}>
        <div>
          <p>
            <b>PROFILE</b>
          </p>
          <p>Consultant Name: {data.name}</p>
          <p>Rate:{data.rate}</p>
          <p>Joined:{data.Joined}</p>
        </div>
        <div>
          <Image
            src="/main_image1.png"
            alt="main_image1"
            width={600}
            height={300}
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL={"/main_image1.png"}
          />
        </div>
      </div>

      <div>
        <ul className={styles.tabs}>
          <li onClick={() => setActiveTab("schedule")} className={activeTab === "schedule" ? styles.tabActive : styles.tab}>
            Schedule
          </li>
          <li onClick={() => setActiveTab("rate")} className={activeTab === "rate" ? styles.tabActive : styles.tab}>
            Rate
          </li>
          <li onClick={() => setActiveTab("about")} className={activeTab === "about" ? styles.tabActive : styles.tab}>
            About
          </li>
        </ul>
      </div>

      {/* Use activeTab state to conditionally show/hide tab content */}
      <div className="dataTabContent">
        {activeTab === "schedule" && (
          <div id="schedule">
            
          </div>
        )}
        
        {activeTab === "rate" && (
          <div id="rate" style={{ display: activeTab === "rate" ? "block" : "none" }}>
           {price.map((price, index) => {
        return (
          <li key={index}>
            <span>{price.Rating}</span>
           <p>{price.Comment}</p>
         </li>
        );
     })}
          </div>
        )}

  {activeTab === "about" && (
    <div id="about" style={{ display: activeTab === "about" ? "block" : "none" }}>
       {about.map((about, index) => {
        return (
          <li key={index}>
           <span>{about.About}</span>
         </li>
        );
     })}
      
      </div>
      )}

      </div>

      <div className={`${styles.flexboxItem} ${styles.flexboxItem1}`}>
        {/* Conditionally render the Calendar component */}
        {showCalendar && 
        <>
        <div>
          <table>
            <tbody>
              {hoursArray.map((hour) => (
                <tr key={hour} onClick={() => handleHourClick(hour)}>
                  <td>
                    <button onClick={() => handleHourClick(hour)}>{`${hour}:00`}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Calendar onChange={onChange} onClickDay={a} value={value} />
        </>
        }
      </div>
    </div>
  );
}


