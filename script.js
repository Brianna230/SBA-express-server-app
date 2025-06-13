import express from "express"

import dreamInterpreter from "./dreamArrays/dreaminterpreter.js"

const app = express()
const port = 3000

app.use('/dreaminterpretations',dreamInterpreter)

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

app.post('/',(req,res)=>{
    res.send('Data is Post')
})
