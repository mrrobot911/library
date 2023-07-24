// pages/api/todos/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import  Books  from "@/models/Books";
import dbConnect from "@/lib/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    await dbConnect();
    const books = await Books.create(req.body)
    console.log(req.body);
    
    res.status(200).json(books.toJSON());
  } catch (error) {
    res.json({error});
  }
  // if (req.method === "GET") {
  //   // for retrieving todos list
  //   const todos = await books.find({}).limit(10).lean();
  //   res.status(200).json(todos);
  // } else if (req.method === "POST") {
  //   // creating a single todo
  //   const body = req.body as CreateUserBody;
    
  //   await books.save();

  //   return res.status(200).json(books.toJSON());
  // } else {
  //   return res.status(405).json({ error: "Method not allowed" });
  // }
}
