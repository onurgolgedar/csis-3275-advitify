export function GET(request, response) {
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