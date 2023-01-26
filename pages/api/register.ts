import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { connectDB, prisma } from "./connectDB";
import { UserRegisterData } from "../types/types";

connectDB();

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  let createUser: Prisma.UserCreateInput;
  const userInput = JSON.parse(req.body) as UserRegisterData;

  createUser = {
    name: userInput.name,
    email: userInput.email,
    //TODO: Encrypt the password 
    password: userInput.password,
  };

  await prisma.user
    .create({ data: createUser })
    .then(() => {
      res.status(200).json({ status: "success" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
