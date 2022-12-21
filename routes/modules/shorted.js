const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log(req.body.url)
  res.render('shorted')
})

module.exports = router