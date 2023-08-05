"use client"
import { useEffect, useState } from "react";

export function useCandidate() {
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    fetch("/api/test/candidates", {
      method: "GET",
      headers: {
        authorization: ""
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { data: candidateData } = data;
        setCandidates(candidateData);
      })
  }, [])
  return candidates;
}
