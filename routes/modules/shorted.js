const express = require('express')
const router = express.Router()
const generateUrl = require('../../generator_URL')

router.post('/', (req, res) => {
  req.body.url // 原網址
  res.render('shorted', { url: generateUrl() })
})

router.get('/:url', (req, res) => {
  res.render('error', { url: req.params.url })
})
module.exports = router