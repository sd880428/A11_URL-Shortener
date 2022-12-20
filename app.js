const express = require('express')
const exphbs = require('express-handlebars')

const app = express() 
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get ('/', (req, res) => {
  res.render('index')
})

app.post('/shorted', (req, res) => {
  res.render('shorted')
})

app.listen(PORT, () => {
  console.log(`the server is start successfully!`)
})