import type { NextApiRequest, NextApiResponse } from "next";
import  users  from "@/models/User";
import dbConnect from "@/lib/connectMongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
)   {
    try{
        await dbConnect();

        const user = await users.findById(req.body.data.id).select("password lastname email firstname books");  
        if ( user && !user.books.includes(req.body.data.book)){  
            user.books.push(req.body.data.book);
            await user.save();
            const userData = user.toObject({ getters: true }); 
            const { password, _id, ...sendUserData } = userData;
            
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.status(200).json(sendUserData);           
        } else {
        res.status(403).json({massage: "You shall not pass"})
        }
    } catch (error) {  
        res.json({error});
    }
}