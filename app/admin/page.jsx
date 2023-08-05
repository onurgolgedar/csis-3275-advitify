"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Admin from "./clients/page";


export default function Default() {

  const router = useRouter();
  const session = sessionStorage.getItem("user")
  const user = JSON.parse(session);
console.log(user.data.userInfo.userType);
  if (!user || user.data.userInfo.userType != 1) return router.push("/");
  return <Admin admin={user}/>
}