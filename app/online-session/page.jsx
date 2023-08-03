"use client"
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ZoomMeetingComponentView() {


  function getAuth() {
    const reqOpt = {
      method: "GET",
    }
    redirect("http://localhost:3000/api/zoom/oauth/auth", reqOpt);
  }

  return (
    <div>

      <Link href={"/api/zoom/oauth/auth"}>Start meeting</Link>
    </div>
  )
}
