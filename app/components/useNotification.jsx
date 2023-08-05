"use client"
import { useEffect, useState } from "react";

export function useNotification() {
  const [notifications, setNotifications] = useState();

  useEffect(() => {
    fetch("/api/test/notifications", {
      method: "GET",
      headers: {
        authorization: ""
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { data: notificationData } = data;
        setClients(notificationData);
      })
  }, [])
  return notifications;
}
