const express = require('express')


const app = express() 
const PORT = process.env.PORT || 3000

app.get ('/', (req,res) => {
  res.send('test')
})

app.listen(PORT, () => {
  console.log(`the server is start successfully!`)
})