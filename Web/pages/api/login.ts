// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  statusCode: number;
  error?: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.body) {
    res.statusCode = 404;
    res.end();
    return;
  }

  const { email, password } = req.body;

  const result = await axios.post("http://127.0.0.1:3001/login", {
    email,
    password,
  });
  res.json(result.data);
}
