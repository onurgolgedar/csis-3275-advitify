import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  const body = await req.json();
  const { username, password } = body;

  const prismaClient = new PrismaClient();

  const login_result = await login(prismaClient, username, password);
  if (login_result) {
    console.log("-> Login successful");
    console.log("-> Token : " + login_result);

    var token = generateToken(login_result);
    await storeTokenInDatabase(prismaClient, token, login_result);

    const response = new Response(
      JSON.stringify({
        data: {
          message: "You have logged in successfully.",
          user: login_result
        },
      })
    );
    response.headers.set("content-type", "application/json");
    response.headers.set("Authorization", "Bearer " + token);

    return response;
  } else {
    console.log("-> Login failed");

    const response = new Response(
      JSON.stringify({
        data: {
          message: "Given credentials were invalid.",
          user: null
        },
      })
    );

    response.headers.set("content-type", "application/json");
    return response;
  }
}

async function login(prismaClient, username, password) {
  const user = await prismaClient.users.findFirst({
    where: {
      username : username,
    }
  });
  if(!user) return null;

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
      accessToken: null
    }
  });

  return loginEntry;
}