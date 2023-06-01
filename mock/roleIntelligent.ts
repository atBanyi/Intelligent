import {Request, Response} from "express";
const roleIntelligent=(req:Request,res:Response)=>{
  return res.json({
    data:[
      {
        id:"00001",
        name:'智能日历',

      },
      {

      }
    ]
  })
}
export default {
  "GET /api/roleIntelligent":roleIntelligent
}
