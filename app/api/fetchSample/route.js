export async function GET(request, response) {
  return new Response(
    JSON.stringify(
      {
        data: {
          message: "This is response from GET, see console to check what the response data has"
        }
      }
    )
  );
}

export async function POST(request, response) {
  const body = await request.json();

  return new Response(
    JSON.stringify(
      {
        data: {
          message: "This is response from POST, see console to check what the response data has",
          body: body
        }
      }
    )
  );
}