import express from "express"

const Router = express.Router()

const users =[{id: 1, username:"brianna101",email:"bri@example.com",password:"12345"},
    {id:2,username:"lunadreamer", email:"lunadreamer@example.com",password:"lua1010"},
    {id:3,username:"dreamseer01",email:"dreamseer@example.com",password:"dream123"},
    {id:4,username:"nightoracale",email:"nightoracle@example.com",password:"nightpass"},
    {id:5,username:"visionsurge", email:"visionsurge@example.com", password:"vision888"},
]

Router.get('/',(req,res)=>{
    res.json(users);
})

Router.get('/:id',(req,res)=>{
const dreamUsers = users.find((u)=>u.id == req.params.id);
if(dreamUsers) res.json(dreamUsers)
})


export default Router;