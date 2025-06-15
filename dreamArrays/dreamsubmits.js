import express from "express"

const Router = express.Router()

const dreamSubmits =[{id:1,title:"A purple moon", description:"I saw a giant moon in a violet sky."},
    {id:2,title:"Flying over a city",description:"I was flying above a glowing city at night, feeling completely free and weightless"},
    {id:3,title:"Talking a cat",description:"A black cat spoke to me in riddles and led me to a hidden door in my childhood home"}
]

Router.use((req,res,next)=>{
    console.log('Retrieved Dream Submission')
    next()
});

Router.get('/',(req,res)=>{
    res.json(dreamSubmits);
});

Router.get('/:id',(req,res)=>{
const dreamSubmission = dreamSubmits.find((u)=>u.id == req.params.id);
if(dreamSubmission)
    {res.json(dreamSubmission)}else{
        res.status(404);
        res.json({error:"Dream submission not found"})
    }
})
//Delete route
Router.delete('/:id',(req,res,next)=>{
    const dreamID = parseInt(req.params.id);
    const dreamSubObject = dreamSubmits.findIndex((u)=>u.id == dreamID); // to find user by ID
    if(dreamSubObject === -1){

       return res.status(404).json({error:"Dream submission not found"})
    }
      dreamSubmits.splice(dreamSubObject,1);
    

    res.json({message:"Data deleted successfully"})

});


export default Router