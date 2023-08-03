import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  const body = await req.json();
  const { username, password } = body;

  const login_result = await login(username, password);
  if (login_result != false) {
    console.log("-> Login successful");
    console.log("-> Token : " + login_result);

    return new Response(
      JSON.stringify({
        data: {
          message: "You have logged in successfully."
        },
      })
    );
  } else {
    console.log("-> Login failed");

    return new Response(
      JSON.stringify({
        data: {
          message: "Given credentials were invalid."
        },
      })
    );
  }
}

async function login(username, password) {
  const prisma = new PrismaClient();
  const user = await prisma.users.findFirst({
    where: {
      email: username,
    },
  });

  if (!user) return false;

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return false;

  const token = generateToken(user);

  console.log("-> Logged in");
  return token
}

function generateToken(user) {
  console.log(user);

  const payload = {
    userId: user.id,
    username: user.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}