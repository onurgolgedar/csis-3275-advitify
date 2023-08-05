import { PrismaClient } from "@prisma/client";
import {
  createResponse,
  checkLogin
} from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const checkLogin = checkLogin(req);
    if (checkLogin != true)
      return checkLogin;

    const clients = await prisma.clients.findMany();
    return createResponse(true, clients);
  } catch (e) {
    console.log("-> Request failed");
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }

}
