import type { NextApiRequest, NextApiResponse } from "next";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    await dbConnect();
    
    const user = await users.find({username:req.body.username});
    
    if (user[0] && user[0].password === req.body.password){
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(user[0].toJSON());
    } else {
      res.status(403).json({massage: "bad credentials"})
    }
  } catch (error) {
    res.json({error});
  }
}