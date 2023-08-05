"use client"

import Image from "next/image";
import styles from "./clientDashboard.module.css";
import Calendar from 'react-calendar';
import "./customCalendar.css"
import { useState } from "react";

export default function ClientDashboard({ params }) {
  const { clientId } = params;
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1>Hi! {user?.username}</h1>
          <h2>DASHBOARD</h2>
          <section className={styles.section}>
            <div>
              <h3>Notification</h3>
            </div>
            <ul className={styles.notificationList}>
              {
                notifications.map((notification, index) => {
                  return (
                    <li key={index} className={styles.notification}>
                      <Image width={25} height={25} src="/exclamation_mark_icon.png" alt="cancel" />
                      <p>{notification.message}</p>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
        <div className={styles.flex}>
          <section className={`${styles.section} ${styles.grow6}`}>
            <h3>Schedule</h3>
            <div>
              <Calendar onChange={onChange} onClickDay={(e) => console.log(e)} />
            </div>
          </section>
          <div className={`${styles.flexCol} ${styles.grow4}`}>
            <section className={styles.section}>
              <h3>progress</h3>
              <ul className={styles.progressList}>
                {
                  progresses.map((progress, index) => {
                    const currentProgress = (progress.currentProgress / progress.totalSession) * 100;
                    return (
                      <li key={index}>{`${progress.category}: ${progress.consultantName} ${currentProgress}%`} </li>
                    )
                  })
                }
              </ul>
            </section>
            <section className={styles.section}>
              <h3>Learning Resources</h3>
              <ul className={styles.textbookList}>
                {
                  textbooks.map((textbook, index) => {
                    return (
                      <li key={index} className={styles.textbook}>
                        <Image width={30} height={30} src="/book_icon.png" alt="textbook" />
                        <span>{textbook.name}</span>
                        <span>{textbook.resourceOwner}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

const notifications = [
  {
    type: "cancel",
    message: "Session canceled: Consultant canceled the reserved session"
  },
  {
    type: "cancel",
    message: "Session canceled: Consultant canceled the reserved session"
  }
];

const progresses = [
  {
    category: "category1",
    consultantName: "consultant1",
    currentProgress: 3,
    totalSession: 10
  }, {
    category: "category1",
    consultantName: "consultant1",
    currentProgress: 4,
    totalSession: 10
  }, {
    category: "category1",
    consultantName: "consultant1",
    currentProgress: 6,
    totalSession: 10
  },
]

const textbooks = [
  {
    name: "textbook1",
    resourceOwner: "name1"
  },
  {
    name: "textbook2",
    resourceOwner: "name2"
  },
  {
    name: "textbook3",
    resourceOwner: "name3"
  },
  {
    name: "textbook4",
    resourceOwner: "name4"
  }
]