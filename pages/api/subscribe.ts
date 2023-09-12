import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConntect";
import { QuotesModel } from "@/models";
// pages/api/subscribe.ts
// we modify the NextApiRequest to what data we expect.
// NextJS automatically parses the data and gives us a javascript object using the body property.
interface CreateQuotesBody {
  name?: string;
  text?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    const quotes = await QuotesModel.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();
    res.status(200).json(quotes);
  } else if (req.method === "POST") {
    if (!req.body.name) return;
    const body = req.body as CreateQuotesBody;
    const quote = new QuotesModel({
      name: body.name,
      text: body.text,
    });

    await quote.save();
    res.redirect("/");
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }

  const name = req.body.name;
  const text = req.body.text;
  //do something with the email
  console.log(`${name}: ${text}`);
}

export function json() {
  throw new Error("Function not implemented.");
}
