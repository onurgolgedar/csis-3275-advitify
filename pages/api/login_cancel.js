import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") return POST(req, res);
  else if (req.method === "GET") return GET(req, res);
  else res.status(405).end();
}

export async function POST(req, res) {
  const { username, password } = req.body;

  if (await login(username, password)) {
    return res.status(200).json({
      message: "Login successful!",
    });
  } else {
    return res.status(401).json({
      message: "Invalid credentials.",
    });
  }
}

export async function GET(req, res) {}

const prisma = new PrismaClient();

async function login(username, password) {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) return false;

  const isValidPassword = bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return false;

  return user;
}
