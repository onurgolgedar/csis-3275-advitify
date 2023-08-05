import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  var token = extractToken(req);
  if (!validateToken(token)) return new Response(JSON.stringify({
    data: {
      message: "You are not logged in.",
    },
  }));

  const prisma = new PrismaClient();
  const consultants = await prisma.consultants.findMany();
  const response = new Response(JSON.stringify({ data: consultants }));
  console.group();
  console.log('success');
  console.groupEnd()
  return response;
}

function extractToken(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return null;

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") return null;

  return tokenParts[1];
}

async function validateToken(token) {

  const prisma = new PrismaClient();
  if (!token) return false;

  const loginRecord = await prisma.login.findUnique({
    where: {
      token: token,
    },
  });

  if (!loginRecord) return false;

  if (loginRecord.expiryDate && loginRecord.expiryDate < new Date())
    return false;

  return true;
}
