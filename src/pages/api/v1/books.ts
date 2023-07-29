import type { NextApiResponse } from "next";
import type { NextRequest } from 'next/server'
import  Books  from "@/models/Books";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextRequest,
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
      const token = req.cookies.library;
      const userName = jwt.verify(token, process.env.TOKEN_SECRET!);   
      const user = await users.findOne({email:userName.email}).select("password lastname email firstname books");    
      const userData = user.toObject({ getters: true });    
      const { password, _id, ...sendUserData } = userData;
      const arr = {
        books: books,
        userdata: userData,
      };
      res.status(200).json(arr);
    } 
    }catch (error) {
        res.json({error});
        }
}