import { PrismaClient } from "@prisma/client";
import {
  createResponse,
} from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const consultants = await prisma.consultants.findMany();
    return createResponse(true, consultants);
  } catch (e) {
    console.log("-> Request failed");
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}
