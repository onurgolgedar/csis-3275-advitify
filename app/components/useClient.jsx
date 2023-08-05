"use client"
import { useEffect, useState } from "react";

export function useClient() {
  const [clients, setClients] = useState();

  useEffect(() => {
    fetch("/api/test/clients", {
      method: "GET",
      headers: {
        authorization: ""
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { data: clientData } = data;
        setClients(clientData);
      })
  }, [])
  return clients;
}
