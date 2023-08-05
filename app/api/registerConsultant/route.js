import { PrismaClient } from "@prisma/client";
import { createResponse } from "../../../util/util.js";

export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    const { username, email, password } = await req.json();

    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        passwordHash: password,
        userType: "3",
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
