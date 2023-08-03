export async function getZakToken(accessToken) {
  // get zak token by using access token
  const zakTokenRes = await fetch("https://api.zoom.us/v2/users/me/token?type=zak", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  const { token: zakToken } = await zakTokenRes.json();

  return zakToken;
}
