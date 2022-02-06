// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { initializeApollo } from "../../lib/apolloClient";
import { gql } from "@apollo/client";

type Data = {
  statusCode: number;
  error?: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
  } catch (e) {
    res.json(e as any);
  }
}
