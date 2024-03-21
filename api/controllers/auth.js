import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginStudent = (req,res) =>{
//CHECK USER EXISTS OR NOT
const q = "SELECT * FROM student WHERE LOWER(email) = LOWER(?)";

db.query(q,[req.body.email],(err,data) =>{
// console.log(data[0].password,"jeje");
  if(err) return res.status(400).json(err);
  
  if(data.length == 0) {
    // console.log(req.body.password)
    return res.status(404).json("User not Found!");
  }

  //Check password
//   const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password);
   if(req.body.password !== data[0].password)
   return res.status(400).json("Wrong username or Password");

  const token = jwt.sign({id: data[0].id},"jwtkey");
  const {password, ...other} =  data[0];
  res.cookie("access-token", token,
  {
    httpOnly : true
  }).status(200).json(other);
})

}
export const loginAdmin = (req,res) =>{
//CHECK USER EXISTS OR NOT
const q = "SELECT * FROM admin WHERE LOWER(email) = LOWER(?)";

db.query(q,[req.body.email],(err,data) =>{
// console.log(data[0].password,"jeje");
  if(err) return res.status(400).json(err);
  
  if(data.length == 0) {
    // console.log(req.body.password)
    return res.status(404).json("User not Found!");
  }

  //Check password
//   const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password);
   if(req.body.password !== data[0].password)
   return res.status(400).json("Wrong username or Password");

  const token = jwt.sign({id: data[0].id},"jwtkey");
  const {password, ...other} =  data[0];
  res.cookie("access-token", token,
  {
    httpOnly : true
  }).status(200).json(other);
})

}
export const logout = (req,res) =>{

}