import Image from "next/image";
import styles from "../Admin.module.css";
import { getTestNotificationData } from "../../../api/fetchSample/testData";

const images = {
  "New Application": "question_mark_icon.png",
  Report: "exclamation_mark_icon.png",
};

export default async function NotificationDisplay() {
  const data = await getTestNotificationData();
  const { data: notifications } = await data.json();
  return (
    <>
      {notifications.length !== 0 ? (
        <ul className={styles.notifications}>
          {notifications.map((notification, index) => {
            return (
              <li key={index} className={styles.notification}>
                <Image
                  src={`/${images[notification.type]}`}
                  alt=""
                  width={24}
                  height={24}
                />
                <span>{notification.message}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>No notifications</h1>
      )}
    </>
  );
}
