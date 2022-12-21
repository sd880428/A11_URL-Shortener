const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  req.body.url
  res.render('shorted')
})

router.get('/:url', (req, res) => {
  res.render('error', { url: req.params.url })
})
module.exports = router