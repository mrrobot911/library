import type { NextApiRequest, NextApiResponse } from "next";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";
import * as bcrypt from "bcrypt";
import { MongoError } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    await dbConnect();
    const data = {...req.body, password: await bcrypt.hash(req.body.password,10)}
    const user = await users.create(data);
    const userData = user.toObject({ getters: true });
    const { password, _id, __v, email, id, ...sendUserData } = userData;
    
    res.status(200).json(sendUserData);
  } catch (error: any ) {
    if (error instanceof MongoError && error.code === 11000){
      res.status(409).json({ message: 'Internet clone is a split personality on the same email.' });
    }else {
      res.json({error});
    }
  }
}