import { redirect } from "next/navigation"

export async function GET(req, res) {
  // redirect to zoom authentication page
  const uri = "https://zoom.us/oauth/authorize?response_type=code&client_id=LPo3h6I9R2CI20IIoEdd3w&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fzoom%2Foauth%2Fredirect"

  return redirect(uri, "replace");
}