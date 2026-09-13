import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080;


app.get('/',(req,res)=>{
   return res.json({message:"Project started!!! \n "})
})

app.listen(PORT,()=>{
    console.log(`project running on port ${PORT}`)
})
