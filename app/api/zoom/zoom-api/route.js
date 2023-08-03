export async function GET(req, res) {
  console.log("Get: fired");
  return new Response(JSON.stringify("zoom-api: get"));
}

export async function POST(req, res) {
  console.log("Post: fired");
  return new Response(JSON.stringify("zoom-api: post"));
}
