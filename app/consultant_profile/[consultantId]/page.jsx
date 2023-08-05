"use client";
import styles from "./consultant_profile.module.css";
import Image from "next/image";
import Calendar from "react-calendar";
import "./customCarendar_profile.css";
import { useState } from "react";
import Link from "next/link";

export default function Consultant({ params }) {
  const { consultantId } = params;
  const consultant = consultantId <= 5 ? consultants[consultantId] : consultants[0]
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("schedule");
  const [value, onChange] = useState(new Date());
  const timeTable = Array(14).fill(0);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${styles.maxWidth1000}`}>
        <div className={`${styles.flex}`}>
          <section className={styles.profileSection}>
            <div className={styles.profileContents}>
              <div>
                <h2><b>Profile</b></h2>
                <div className={styles.info}>
                  <p>Name: {consultant.name}</p>
                  <p>Rate: {consultant.rate}.8 / 5</p>
                  <p>Joined: Jun, 2020</p>
                </div>
              </div>
              <div>
                <Image
                  src={consultant.imgUrl}
                  width={200}
                  height={300}
                  alt={consultant.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    maxHeight: "280px",
                  }}
                />
              </div>
            </div>
          </section>
          <section className={styles.skillsSection}>
            <h2><b>Skills & Experiences</b></h2>
            <p>{consultant.description}</p>
          </section>
        </div>
        <section className={styles.details}>
          <div className={styles.tabContainer}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === "schedule" ? styles.active : ""}`}
                onClick={() => setActiveTab("schedule")}>
                Schedule
              </button>
              <button
                className={`${styles.tab} ${activeTab === "rate" ? styles.active : ""}`}
                onClick={() => setActiveTab("rate")}>
                Rate
              </button>
              <button
                className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
                onClick={() => setActiveTab("about")}>
                About
              </button>
            </div>
          </div>
          {
            activeTab === "schedule"
              ?
              <div className={`${styles.flex} ${styles.schedule}`}>
                <div className={styles.availability}>
                  <h2>{date.toDateString()}</h2>
                  <ul className={styles.days}>
                    <li className={styles.day}>
                      <span className={styles.time}>time</span>
                      <p>Availability</p>
                    </li>
                    {
                      timeTable.map((el, index) => {
                        const time = index + 8;
                        return (
                          <li key={index} className={styles.day}>
                            <span className={styles.time}>{time < 12 ? time + " AM" : time === 12 ? time + "PM" : time - 12 + "PM"}</span>
                            <Link className={styles.book} href={"/api/zoom/oauth/auth"}>Available</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div id="profile" className={styles.calendar}>
                  <Calendar onChange={onChange} onClickDay={(e) => setDate(e)}></Calendar>
                </div>
              </div>
              :
              activeTab === "rate"
                ?
                <ul className={styles.rates}>
                  {
                    Array(100).fill(0).map((el, index) => {
                      const rate = Math.floor(Math.random() * 10) % 5;
                      return (
                        <li key={index} className={styles.rate}>
                          <div className={styles.flex}>
                            <p><b>Name</b>: client name{index}</p>
                            <p><b>Rate</b>: {rate}</p>
                          </div>
                          <p><b>Comment</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat nam at.</p>
                        </li>
                      )
                    })
                  }
                </ul>
                :
                <div className={styles.about}>
                  <p><b>Tel</b>: xxx-xxxx-xxxx</p>
                  <p><b>Email</b>: consultant@advitify.com</p>
                  <div>
                    <p><b>About</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat nam at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat nam at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non consectetur a erat nam at.</p>
                  </div>
                </div>
          }
        </section>
      </div>
    </div>
  );
}




const consultants = [
  {
    id: 0,
    name: "Amelia Thompson",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "Amelia excels at comprehending, designing, and overseeing software projects in various languages.",
    export: "Software",
    rate: 4
  },
  {
    id: 1,
    name: "Benjamin Smith",
    imgUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    description:
      "Benjamin is skilled in identifying cybersecurity risks and implementing protective measures.",
    export: "Cybersecurity",
    rate: 4
  },
  {
    id: 2,
    name: "Charlotte Davis",
    imgUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
    description:
      "Charlotte adeptly deploys and manages cloud-based solutions using diverse platforms.",
    export: "Cloud computing",
    rate: 4
  },
  {
    id: 3,
    name: "Daniel Wilson",
    imgUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description:
      "Daniel expertly manages and secures vast data volumes with his database system and modeling knowledge.",
    export: "Database",
    rate: 4
  },
  {
    id: 4,
    name: "Elizabeth Anderson",
    imgUrl:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1682&q=80",
    description:
      "Elizabeth excels at improving satisfaction with her superior communication and problem-solving skills.",
    export: "Customers",
    rate: 4
  },
];