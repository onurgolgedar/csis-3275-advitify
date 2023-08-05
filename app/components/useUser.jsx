"use client"
import { useContext } from "react";
import { UserContext } from "./UserContext";
import jwt from "jsonwebtoken";


export function useUser() {
  const user = useContext(UserContext);

  // if (user) {
  //   const token = user.user?.data.token;
  //   // const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, function (err, decoded) {
  //   //   if (err) {
  //   //     console.log("Error -> ", err);
  //   //   }
  //   // })

  //   // if(decoded) return user;
  //   // else return null;
  //   if (token == null)
  //     return {user: undefined, setUser: setUser};
  // }

  return user;
}