import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createResponse } from "../../../util/util.js";
// import { Issuer } from "openid-client";

export async function POST(req, res) {
  const prisma = new PrismaClient();

  try {
    const { username, password } = await req.json();

    const userInfo = await login(prisma, username, password);
    if (userInfo) {
      console.log("-> Login successful");
      console.log("-> Token : " + userInfo);

      var token = generateToken(userInfo);

      await storeTokenInDatabase(prisma, token, userInfo);

      // // Discover the OpenID Connect provider
      // const provider = await Issuer.discover("https://accounts.google.com/");

      // // Set up the client
      // const client = new provider.Client({
      //   client_id:
      //     "25585881383-3094f025u2180k36v1slrn7g8il0rn42.apps.googleusercontent.com",
      //   client_secret: "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",
      //   redirect_uris: ["http://localhost:3000/Callback"],
      //   response_types: ["code"],
      // });

      // // Define the scope of the authentication
      // const scope = "openid profile email";

      // // Generate the authorization URL
      // const authorizationUrl = client.authorizationUrl({
      //   scope,
      // });

      // // Redirect the user to the authorization URL
      // console.log(authorizationUrl);

      return createResponse(
        true,
        { token: token, userInfo: userInfo },
        "You have logged in successfully."
      );
    } else {
      console.log("-> Login failed");
      return createResponse(false, null, "Given credentials were invalid.");
    }
  } catch (e) {
    console.log("Error -> " + e);
    return createResponse(false, null, e);
  } finally {
    prisma.$disconnect();
  }
}

async function login(prisma, username, password) {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) return null;

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return null;

  return user;
}

function generateToken(user) {
  console.log(user);

  const payload = {
    userId: user.id,
    username: user.username,
  };

  return jwt.sign(payload, "process.env.JWT_SECRET", {
    expiresIn: "1h",
  });
}

async function storeTokenInDatabase(prisma, token, user) {
  const loginEntry = await prisma.login.create({
    data: {
      token: token,
      expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      userID: user.id,
      idToken: null,
      accessToken: null,
    },
  });

  return loginEntry;
}
