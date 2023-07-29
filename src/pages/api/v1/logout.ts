import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Set-Cookie", `library='del'; Path=/api/v1/books; Max-Age=0`);
      res.status(200).json({massage: "sucsess"});    
    } 
  catch (error) {  
    res.json({error});
  }
}