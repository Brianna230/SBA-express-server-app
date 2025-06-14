import express from 'express'

const Router = express.Router()

const port = 3000

const dreamInterpreter =[{id:1, symbol:"Flying", meaning:"A desire for freedom or rising above challenges." },
    {id:2, symbol:"Falling", meaning:"Fear of failure or loss of control."},
    {id:3, symbol:"Water", meaning:"Represents emotions and the subconscious mind."},
    {id:4, symbol:"Snakes", meaning:"Transformation, fear or hidden danger."},
    {id:5, symbol:"Teeth falling out",meaning:"Insecurity about appearance or loss."},
    {id:7, symbol:"Being Chased", meaning:"Avoidance of a problem or confronting fear."},
    {id:8, symbol:"Death", meaning:"Ending and new beginnings; not literal but symbolic of change."},
    {id:10, symbol:"Houses",meaning:"The Self; different rooms = different parts of life and psyche."},
    {id:11, symbol:"Mirrors", meaning:"Self-reflection,identity, and how you perceive yourself."},
    {id:12, symbol:"Pregnancy", meaning:"New ideas,growth, or a creative project developing."},
    {id:13, symbol:"Nudity", meaning:"Vulnerability,exposure,or fear of judgement."},
    {id:14, symbol:"Storms", meaning:"Inner conflict,anger,or a chaotic emotional state."},
    {id:15, symbol:"Doors", meaning:"Opportunities,transitions, or moving into a new phase."},
    {id:16, symbol:"Ladders", meaning:"Progress, spirtitual ascension, or goals."},
    {id:17, symbol:"Birds", meaning:"Freedom,messages from the spirits, or higher perspective."},
    {id:18, symbol:"Cats", meaning:"Feminine energy, independence, or intuition."},
    {id:19, symbol:"Keys", meaning:"Access to hidden knowledge, searcts, or solutions"},
    {id:20, symbol:"Mountains", meaning:"Challenges, spiritual elevation, or long-term goals"}

];

Router.get('/',(req,res)=>{
    res.json(dreamInterpreter)
})
Router.get('/:id',(req,res)=>{
const dreamId = dreamInterpreter.find((u)=>u.id == req.params.id);
if(dreamId)
    {res.json(dreamId)}else{
        res.status(404);
        res.json({error:"Dream meaning not found"})
    }
})

export default Router;