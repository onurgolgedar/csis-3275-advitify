export async function getTestCandidateData(request, response) {
  const candidateTestData = [
    {
      id: Math.floor(Math.random() * 10),
      fName: "fname1",
      lName: "lname1",
      email: "testCandidate1@test.com",
      phone: "xxx-xxx-xxxx",
      link: "1",
    },
    {
      id: Math.floor(Math.random() * 10),
      fName: "fname2",
      lName: "lname2",
      email: "testCandidate2@test.com",
      phone: "xxx-xxx-xxxx",
      link: "2",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Response(JSON.stringify({ data: candidateTestData }));
}

export async function getTestNotificationData(request, response) {
  const notificationsTestData = [
    {
      id: Math.floor(Math.random() * 10),
      type: "New Application",
      message: "Consultant: new consultant application",
    },
    {
      id: Math.floor(Math.random() * 10),
      type: "Report",
      message: "Report: user reported an issue",
    },
  ];
  return new Response(JSON.stringify({ data: notificationsTestData }));
}

export async function getTestClientData(request, response) {
  const clientTestData = [
    {
      id: Math.floor(Math.random() * 10),
      fName: "fname1",
      lName: "lname1",
      email: "testCandidate1@test.com",
      phone: "xxx-xxx-xxxx",
      link: "1",
    },
    {
      id: Math.floor(Math.random() * 10),
      fName: "fname2",
      lName: "lname2",
      email: "testCandidate2@test.com",
      phone: "xxx-xxx-xxxx",
      link: "2",
    },
  ];
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Response(JSON.stringify({ data: clientTestData }));
}
