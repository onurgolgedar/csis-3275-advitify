"use client"
import { useRouter } from "next/navigation";
import { useUser } from "../components/useUser";
import Admin from "./clients/page";


export default function Default() {
  const router = useRouter();
  const user = useUser();
  console.log(user);
  if(!user.user) return router.push("/");
  return (
    user.user ? <Admin /> : <></>
  )
}