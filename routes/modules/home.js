const express = require('express')
const shortURL = require('../../models/shortURL')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:URLId', (req, res) => {
  const URLId = req.params.URLId
  return shortURL.findOne({ URLId })
    .lean()
    .then((shortURL) => {
      shortURL ? res.redirect(shortURL.originURL) : res.redirect(`shorted/${URLId}`) 
    })
    .catch(error => console.error(error))
})

module.exports = router