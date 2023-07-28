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
    
    if (req.method === "POST"){
      const books = await Books.create(req.body);
      res.status(200).json({massage: "You shall not pass"});
      }
    if (req.method === "GET"){
      const books = await Books.find().select("name author text image season");     
      res.status(200).json(books);
    }
  } catch (error) {
    res.json({error});
  }
}
