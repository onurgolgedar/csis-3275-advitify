import { redirect } from "next/navigation";
import { getAccessToken } from "./getAccessToken";
import { getZakToken } from "./getZakToken";

export async function GET(req, res) {
  // redirected form zoom auth page: get authorization token from the url parameter
  const params = new URLSearchParams(req.url.split("?")[1]);
  const authorizationCode = params.get("code");

  // get access token to fetch zak token
  const accessToken = await getAccessToken(authorizationCode);

  // get zak token by using access token
  const zakToken = await getZakToken(accessToken);

  // redirect to meeting room
  return redirect(`http://localhost:3000/online-session/metting?zak=${zakToken}`, "replace");
}