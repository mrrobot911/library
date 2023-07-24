import type { NextApiRequest, NextApiResponse } from "next";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    await dbConnect();

    const user = await users.findOne({email:req.body.email}).select("password lastname email firstname books");    
    if (user && await bcrypt.compare(req.body.password, user.password)){   
      const userData = user.toObject({ getters: true });    
      const { password, _id, ...sendUserData } = userData;
      const tokenData = {
        id: sendUserData.id,
        email: sendUserData.email
      }
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1h"})
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Set-Cookie", `library=${token}; Path=/; Max-Age=3600`);
      res.status(200).json(sendUserData);    
    } else {
      res.status(403).json({massage: "You shall not pass"})
    }
  } catch (error) {  
    res.json({error});
  }
}