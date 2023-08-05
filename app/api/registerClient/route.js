import { PrismaClient } from "@prisma/client";
import { createResponse, checkLogin } from "../../../util/util.js";

export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    const checkLogin = checkLogin(req);
    if (checkLogin != true)
      return checkLogin;

    const { username, email, password } = await req.json();

    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        passwordHash: password,
        userType: "2",
      },
    });

    return createResponse(true, newUser, "User has been created successfully.");
  } catch (e) {
    console.log("-> Request failed");
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}
