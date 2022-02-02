// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type Data = {
  token: any;
};

const KEY = "dadasdasdasdasdasdsad";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.body) {
    res.statusCode = 404;
    res.end();
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
      },
      KEY
    ),
  });
}
