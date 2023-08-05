export function GET(request, response) {
  const candidateTestData = initCandidates()

  return new Response(JSON.stringify({ data: candidateTestData }));
}

function initCandidates() {
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