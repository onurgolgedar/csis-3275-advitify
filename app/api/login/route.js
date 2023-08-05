import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CreateResponse } from "../../../util/util.js";

export async function POST(req, res) {
  const body = await req.json();
  const { username, password } = body;

  const prismaClient = new PrismaClient();

  const userInfo = await login(prismaClient, username, password);
  if (userInfo) {
    console.log("-> Login successful");
    console.log("-> Token : " + userInfo);

    var token = generateToken(userInfo);
    await storeTokenInDatabase(prismaClient, token, userInfo);

    return CreateResponse(true, { token: token, userInfo: userInfo }, "You have logged in successfully.");
  } else {
    console.log("-> Login failed");
    return CreateResponse(true, null, "Given credentials were invalid.");
  }
}

async function login(prismaClient, username, password) {
  const user = await prismaClient.users.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) return null;

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return null;

  return user;
}

function generateToken(user) {
  console.log(user);

  const payload = {
    userId: user.id,
    username: user.username,
  };

  return jwt.sign(payload, "process.env.JWT_SECRET", {
    expiresIn: "1h",
  });
}

async function storeTokenInDatabase(prismaClient, token, user) {
  const loginEntry = await prismaClient.login.create({
    data: {
      token: token,
      expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      userID: user.id,
      idToken: null,
      accessToken: null,
    },
  });

  return loginEntry;
}
