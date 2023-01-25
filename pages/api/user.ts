import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { connectDB, prisma } from "./connectDB";
import { UserRegisterData } from "../types/types";

connectDB();

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  let user: Prisma.UserCreateInput;
  const userInput = JSON.parse(req.body) as UserRegisterData;

  console.log(userInput);

  //?: Check to create a file for each method
  //?: Use a switch and separate each method into his own function.

  if (req.method === "GET") {
    //TODO: Code something =)
  }

  if (req.method === "POST") {
    user = {
      name: userInput.name,
      email: userInput.email,
      //TODO: Encrypt the password
      password: userInput.password,
    };

    await prisma.user
      .create({ data: user })
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
}
