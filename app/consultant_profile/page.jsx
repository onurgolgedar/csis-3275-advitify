"use client"
import styles from "./container.module.css"
import data from "./test.json"
import Image from "next/image"

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import React, { useState } from "react";

export default function Consultant() {
  const [value, onChange] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  function a(e) {
    console.log(e.getDate());
  }

  function handleDateClick(e) {
    console.log(e.getDate());
  }

  function handleHourClick(hour) {
    setSelectedHour(hour);
  }

  // Generate an array for the hours of the day (0-23)
  const hoursArray = Array.from({ length: 24 }, (_, index) => index);

  return (
    <div className={styles.container}>
      <div className={styles.flexboxItem}>
        <div>
          <p><b>PROFILE</b></p> 
          <p>Consultant Name: {data.name}</p>
          <p>Rate:</p>
          <p>Joined:</p>
        </div>
        <div>
          <Image
            src="/main_image1.png"
            alt="main_image1"
            width={600}
            height={300}
            style={{objectFit: "contain"}}
            placeholder="blur"
            blurDataURL={'/main_image1.png'}
          />
        </div>
      </div>
      
      <div>
        <ul class={styles.tabs}>
          <li data-tab-target="#schedule" className={styles.tab}>Schedule</li>
          <li data-tab-target="#rate"className={styles.tab}>Rate</li>
          <li data-tab-target="#about" className={styles.tab}>About</li>
        </ul>
      </div>

      <div class={styles.dataTabContent}>
        <div id = "schedule" className={styles.dataTabContent} class={styles.tab.active}>
          <p>schedule</p>
        </div>
      </div>
      <div id = "rate" className={styles.dataTabContent}>
        <p>Rate</p>
      </div>
      <div id ="about" className={styles.dataTabContent}>
        <p>vyva</p>
      </div>

      <div className={`${styles.flexboxItem} ${styles.flexboxItem1}`}>
        <div>
          <div>
            {/* Additional content goes here */}
            <table>
              <tbody>
                {hoursArray.map((hour) => (
                  <tr key={hour} onClick={() => handleHourClick(hour)}>
                    <td>
                      <button
                        onClick={() => handleHourClick(hour)}
                      >
                        {`${hour}:00`}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Calendar onChange={onChange} onClickDay={(e) => a(e)} value={value}/>
      </div> 
    </div>
  );
}
