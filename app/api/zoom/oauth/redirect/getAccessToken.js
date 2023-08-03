export async function getAccessToken(authorizationCode) {
  // encode credentials
  const base64EncodedCredentials = btoa(`${process.env.AUTH_ID}:${process.env.AUTH_SECRET}`);

  // get access token
  const data = await fetch("https://zoom.us/oauth/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${base64EncodedCredentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      "code": authorizationCode,
      "grant_type": "authorization_code",
      "redirect_uri": "http://localhost:3000/api/zoom/oauth/redirect", // the same as the registered redirect url on OAuth app
    })
  });
  const res = await data.json();
  const accessToken = res.access_token;

  return accessToken;
}
