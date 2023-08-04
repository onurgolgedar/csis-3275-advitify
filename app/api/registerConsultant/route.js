import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const { username, email, password, userType } = await req.json();

    // Create a new user in the 'Users' table using the Prisma client
    const newUser = await prisma.users.create({
      data: {
        username:username,
        email:email,
        passwordHash:password,
        userType:"3",
      },
    });

    //res.status(201).json({ message: 'User registered successfully', user: newUser });
    return new Response(JSON.stringify({data:newUser}));
  } catch (error) {
    console.error('Error registering user:', error);
    console.log(error);
    //res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the Prisma client connection
    prisma.$disconnect();
  }
}
