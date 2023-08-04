import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();

  const response = new Response(JSON.stringify(clients));

  response.headers.set("content-type", "application/json");
  return response;
}