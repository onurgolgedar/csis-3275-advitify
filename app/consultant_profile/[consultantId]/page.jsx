"use client";
import styles from "./container.module.css";
import data from "./test.json";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

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



export default function Consultant({ params }) {
  const { consultantId } = params;
  const consultant = consultantId <= 5 ? consultants[consultantId] : consultants[0]
  const [activeTab, setActiveTab] = useState("schedule");

  const [value, onChange] = useState(new Date());
  // const [selectedHour, setSelectedHour] = useState(null);



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
              <button className={`${styles.tab} ${styles.active}`}>Schedule</button>
              <button className={styles.tab}>Rate</button>
              <button className={styles.tab}>About</button>
            </div>
          </div>
          <div className={`${styles.flex} ${styles.body}`}>
            <div className={styles.schedule}>
              schedule
            </div>
            <div className={styles.Calendar}>
              <Calendar onChange={onChange}></Calendar>
            </div>
          </div>
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
