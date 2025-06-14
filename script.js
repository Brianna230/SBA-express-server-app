import express from "express"

import dreamInterpreter from "./dreamArrays/dreaminterpreter.js"

const app = express()
const port = 3000
app.use(express.urlencoded({extend:true}))
app.use(express.json())

app.use('/dreams',dreamInterpreter)

app.use((req,res,next)=>{
    console.log('Request Received')
    next()
});

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})

app.get('/',(req,res)=>{
    res.send('dream journel live')
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send('Data is Post')
})

app.get('/dreams',(req,res)=>{
   res.json(dreamInterpreter)
})

