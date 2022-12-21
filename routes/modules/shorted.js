const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  req.body.url
  res.render('shorted')
})

router.get('/:URLId', (req, res) => {
  console.log(req.params.URLId)
  res.render('index')
})
module.exports = router