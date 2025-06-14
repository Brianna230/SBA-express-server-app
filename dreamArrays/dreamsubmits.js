import express from "express"

const Router = express.Router()

const dreamSubmits =[{id:1,title:"A purple moon", description:"I saw a giant moon in a violet sky."},
    {id:2,title:"Flying over a city",description:"I was flying above a glowing city at night, feeling completely free and weightless"},
    {id:3,title:"Talking a cat",description:"A black cat spoke to me in riddles and led me to a hidden door in my childhood home"}
]

Router.get('/',(req,res)=>{
    res.json(dreamSubmits);
})

export default Router