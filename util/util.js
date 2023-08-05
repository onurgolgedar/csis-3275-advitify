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

export async function api_fetch(endpoint, user = null, isLoginRequired = false) {
  const response = await fetch("/api/" + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.data?.token}`,
    },
  });

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  if (isLoginRequired && user?.data?.token == null) {
    window.alert("You need to login.");
  }

  return await response.json();
}

export async function checkLogin(req) {
  if (!validateToken(extractToken(req)))
    return createResponse(false, "You need to login.");
  else return true;
}
