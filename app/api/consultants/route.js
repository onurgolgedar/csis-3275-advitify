import { PrismaClient } from "@prisma/client";
import {
  createResponse,
  extractToken,
  validateToken,
} from "../../../util/util.js";

export async function GET(req, res) {
  // var token = extractToken(req);
  // if (!validateToken(token)) createResponse(false, "You are not logged in.");

  const prisma = new PrismaClient();
  const consultants = await prisma.consultants.findMany();

  const response = createResponse(true, consultants);
  return response;
}
