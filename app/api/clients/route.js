import { PrismaClient } from "@prisma/client";
import { CreateResponse } from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();

  const response = CreateResponse(true, clients);
  return response;
}