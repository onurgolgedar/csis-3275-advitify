import { PrismaClient } from "@prisma/client";
import { createResponse, checkLogin } from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const clientsResult = (
      await prisma.users.findMany({
        include: {
          profiles: true,
          clients: true,
        },
      })
    ).filter((user) => user.clients && user.clients.length === 1);

    console.log(clientsResult);
    const clients = [];
    clientsResult.forEach((client) => {
      clients.push({
        id: client.username,
        name: client.profiles[0].firstName + " " + client.profiles[0].lastName,
        imgUrl: client.profiles[0].profileImage,
        description: client.profiles[0].bio,
      });
    });

    console.log(clients);
    return createResponse(true, clients);
  } catch (e) {
    console.log("-> Request failed " + e);
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}
