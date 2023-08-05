"use client"
import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUser() {
  const user = useContext(UserContext);
  return user;
}