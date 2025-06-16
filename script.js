import express from "express"

import dreamInterpreter from "./dreamArrays/dreaminterpreter.js"

import users from "./dreamArrays/user.js"

import dreamSubmits from "./dreamArrays/dreamsubmits.js"

const app = express()
const port = 3000
app.use(express.urlencoded({extend:true}))
app.use(express.json())
app.set('view engine','ejs');
app.use('/public',express.static('public'))

app.use('/dreams',dreamInterpreter)
app.use('/users' ,users)
app.use('/dreamsubmits',dreamSubmits)

app.use((req,res,next)=>{
    console.log('Request Received')
    next()
})


app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})

app.get('/',(req,res)=>{
    res.send('dream journel live')
})

app.get('/signup',(req,res)=>{
    res.render('index' ,{title:'Sign Up'});  
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send('Data is Post')
})

app.get('/dreams',(req,res)=>{
   res.json(dreamInterpreter)
})

app.get('/users',(req,res)=>{
    res.json(users)
})
app.get('/dreamsubmits',(req,res)=>{
    res.json(dreamSubmits)
})