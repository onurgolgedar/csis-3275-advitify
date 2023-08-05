export async function GET(request, response) {
  const clientTestData = initClients();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Response(JSON.stringify({ data: clientTestData }));
}

function initClients() {
  const candidates = [];
  const randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  for (let i = 0; i < randomNum; i++) {
    const id = Math.floor(Math.random() * 1000);
    const candidate = {
      id: id,
      fName: `fname${id}`,
      lName: `lname${id}`,
      email: `testCan${id}@test.com`,
      phone: "xxx-xxx-xxxx",
      link: id,
    }
    candidates.push(candidate);
  }

  return candidates;
}