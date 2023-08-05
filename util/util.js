import { PrismaClient } from "@prisma/client";

export function createResponse(success, data = null, message = null) {
  return new Response(
    JSON.stringify({
      success: success,
      data: data,
      message: message,
    })
  );
}

export function extractToken(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return null;

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") return null;

  return tokenParts[1];
}

export async function validateToken(token) {
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

export async function CheckLogin(req) {
    if (!validateToken(extractToken(req)))
        return createResponse(false, "You are not logged in.");
    else
        return true;
}