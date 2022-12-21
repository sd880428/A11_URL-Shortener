const express = require('express')
const shortURL = require('../../models/shortURL')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:URLId', (req, res) => {
  shortURL.findOne({ URLId: req.params.URLId })
    .lean()
    .then(shortURL => res.redirect(shortURL.originURL))
})

module.exports = router