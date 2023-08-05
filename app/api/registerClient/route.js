import { PrismaClient } from "@prisma/client";
import { createResponse, checkLogin } from "../../../util/util.js";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    const { username, email, password } = await req.json();

    var passwordHash = await bcrypt.hash(password, 8);
    console.log(passwordHash);
    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        passwordHash: passwordHash,
        userType: "2",
      },
    });

    return createResponse(true, newUser, "User has been created successfully.");
  } catch (e) {
    console.log("-> Request failed" + e);
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}
