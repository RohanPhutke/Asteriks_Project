import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"Bhoyrekar@123",
    database :"hms"
})