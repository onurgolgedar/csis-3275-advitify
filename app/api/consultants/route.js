import { PrismaClient } from "@prisma/client";
import {
  createResponse,
  extractToken,
  validateToken,
} from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    // var token = extractToken(req);
    // if (!validateToken(token)) createResponse(false, "You are not logged in.");
    const consultants = await prisma.consultants.findMany();
  } catch (e) {
    console.log("-> Request failed");
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }

  const response = createResponse(true, consultants);
  return response;
}
