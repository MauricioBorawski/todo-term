import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({ log: ["info", "query", "warn", "error"] });

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("? Database connected successfully");
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export { prisma, connectDB };
