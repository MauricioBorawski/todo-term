import type { NextApiRequest, NextApiResponse } from "next";
import { UserLoginData } from "../types/types";
import { connectDB, prisma } from "./connectDB";

connectDB();

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  const parsedReq = JSON.parse(req.body) as UserLoginData;

  await prisma.user
    .findUnique({
      where: {
        email: parsedReq.email,
      },
    })
    .then((data) => {
      if (data) {
        if (data.password === parsedReq.password) {
          res.status(200).json({
            success: true,
            user: {
              name: data.name,
              email: data.email,
            },
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "" });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
