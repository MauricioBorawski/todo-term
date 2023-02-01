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
        console.log(data);
        if (data.password === parsedReq.password) {
          res.status(200).send({
            success: true,
            user: {
              name: data.name,
              email: data.email,
            },
          });
        } else {
          res.status(400).send({success: false, error: "password"});
        }
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "some error" });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
