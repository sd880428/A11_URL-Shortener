const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const shorted = require('./modules/shorted')

router.use('/', home)
router.use('/shorted', shorted)

module.exports = router