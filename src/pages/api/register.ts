import type { NextApiRequest, NextApiResponse } from "next";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    await dbConnect();
    console.log(req.body);
    
    const user = await users.create(req.body);
    res.status(200).json(user.toJSON());
  } catch (error) {
    res.json({error});
  }
}