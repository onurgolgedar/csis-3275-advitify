export async function login() {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "admin@advitify.com",
      password: "123456"
    })
  });

  console.log(response);

  const { data } = await response.json();
  return data.token;
}