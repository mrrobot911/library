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
}
