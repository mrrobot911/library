// pages/api/todos/index.ts
import  books  from "@/models/todo";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/connectMongo";
interface CreateUserBody {
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    // for retrieving todos list
    const todos = await books.find({}).limit(10).lean();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    // creating a single todo
    const body = req.body as CreateUserBody;
    
    await books.save();

    return res.status(200).json(books.toJSON());
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
