"use client"
import { useUser } from "../components/useUser";
import Admin from "./clients/page";

export default function Default() {
  const user = useUser();

  return (
    <Admin />
  )
}