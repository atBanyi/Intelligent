import {Request,Response} from "express";

const getData = async (req:Request,res:Response)=>{
  const result = {
    success:true,
    data:{
      "text": "MOck Get Test"
    }
  };
  return res.json(result);
}

const postData = async (req:Request,res:Response)=>{
  const result = {
    success:true,
    data:{
      "text": "MOck Post Test"
    }
  };
  return res.json(result);
}

export default {
  'GET /api/getData':getData,
  'POST /api/postData':postData,
}

