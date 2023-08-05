import { PrismaClient } from "@prisma/client";
import { createResponse, checkLogin } from "../../../util/util.js";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    // console.log("1 - " + req);
    const loggedIn = await checkLogin(req);
    // console.log("2 - " + loggedIn);
    if (loggedIn != true) return loggedIn;

    const consultantsResult = (
      await prisma.users.findMany({
        include: {
          profiles: true,
          consultants: true,
        },
      })
    ).filter((user) => user.consultants && user.consultants.length == 1);

    // console.log(consultantsResult);
    const consultants = [];
    consultantsResult.forEach((consultant) => {
      consultants.push({
        id: consultant.username,
        name:
          consultant.profiles[0].firstName +
          " " +
          consultant.profiles[0].lastName,
        imgUrl: consultant.profiles[0].profileImage,
        description: consultant.profiles[0].bio,
        expertise: "Software",
      });
    });

    // console.log(consultants);
    return createResponse(true, consultants);
  } catch (e) {
    console.log("-> Request failed " + e);
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}
