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
      const arr = {
        books: books,
      };  
      res.status(200).json(arr);
    }
  } catch (error) {
    res.json({error});
  }
}
