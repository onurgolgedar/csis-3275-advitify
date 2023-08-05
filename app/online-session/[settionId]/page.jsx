"use client";
import { useEffect } from "react";
import styles from "../online-session.module.css"
import { useRouter } from "next/navigation";

const demoUser = {
  name: "test user",
  email: "test@test.com",
  userType: "host",
  zoomRoomNumber: process.env.NEXT_PUBLIC_MEETING_NUMBER, // only consultants have this property
  zoomRoomPassword: process.env.NEXT_PUBLIC_MEETING_PASSWORD, // only consultants have this property
};

const meetingObject = {
  zoomRoomNumber: process.env.NEXT_PUBLIC_MEETING_NUMBER, // only consultants have this property
  zoomRoomPassword: process.env.NEXT_PUBLIC_MEETING_PASSWORD, // only consultants have this property
};

export default function ZoomMeetingComponentView({ searchParams }) {
  const { zak } = searchParams;
  const router = useRouter();
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if(session) {
      const user = JSON.parse(session);
      console.log(user);
      initZoomApp(zak, user);
    } else {
      router.push("/");
      window.alert("access failed")
    }
  }, [zak]);

  return (
    <div className={styles.container}>
      <div id="meetingSDKElement">Initializing meeting ...</div>
    </div>
  );
}

async function initZoomApp(zak, user) {
  
  // initialize client
  const { client, clientConf } = await initClient(zak, user);

  // start meeting
  startMeeting(client, clientConf);
}

async function initClient(zak, user) {
  const ZoomMtgEmbedded = await (
    await import("@zoomus/websdk/embedded")
  ).default;

  // init client object
  const client = ZoomMtgEmbedded.createClient();

  // set client configuration
  const clientConf = {
    authEndpoint: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
    sdkKey: process.env.NEXT_PUBLIC_CLIENT_ID,
    signature: "",
    meetingNumber: meetingObject.zoomRoomNumber, // actual meeting number: user need to input
    passWord: meetingObject.zoomRoomPassword, // actual password for the meeting: user need to input
    role: user?.data?.userInfo?.userType == "2" ? 0 : 1, // 0 implies client, 1 implies host
    userName: user?.data?.userInfo?.username, // username: user need to input
    userEmail: user?.data?.userInfo?.email, // user email: user need to input
    zak: zak, // to start a meeting, the host's zak token is required
  };

  // create signature and store it to client configuration
  const { signature } = await getSignature(
    clientConf.meetingNumber,
    clientConf.role
  );
  clientConf.signature = signature;

  // meeting display configuration
  const meetingSDKElement = document.getElementById("meetingSDKElement");
  client.init({
    debug: true,
    zoomAppRoot: meetingSDKElement,
    language: "en-US",
    customize: {
      meetingInfo: [
        "topic",
        "host",
        "mn",
        "pwd",
        "telPwd",
        "invite",
        "participant",
        "dc",
        "enctype",
      ],
      video: {
        isResizable: true,
        viewSizes: {
          default: {
            width: 800,
            height: 550,
          },
          ribbon: {
            width: 400,
          },
        },
      },
    },
  });

  return { client: client, clientConf: clientConf };
}

async function getSignature(meetingNumber, role) {
  const data = await fetch(process.env.NEXT_PUBLIC_AUTH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: role,
    }),
  });
  const { data: signature } = await data.json();
  return signature;
}

function startMeeting(client, clientConf) {
  client.join({
    signature: clientConf.signature,
    sdkKey: clientConf.sdkKey,
    meetingNumber: clientConf.meetingNumber,
    password: clientConf.passWord,
    userName: clientConf.userName,
    userEmail: clientConf.userEmail,
  });
}
