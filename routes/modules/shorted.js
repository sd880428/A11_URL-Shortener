const express = require('express')
const router = express.Router()
const generateUrl = require('../../public/javascripts/generatorURL')//創建五碼亂碼
const shortURL = require('../../models/shortURL')

router.post('/', (req, res) => {
  const URLId = generateUrl()
  const originURL = req.body.originURL
  //'$or'尋找符合指定的任一值
  //判斷資料庫是否已有相同亂碼或相同原網址
  return shortURL.find({ $or: [{ URLId }, { originURL }] })
    .lean()
    .then((shorturl) => {
      if (shorturl.length) {
        //有就導到output頁
        res.render('shorted', { URLId: shorturl[0].URLId })
      } else {
        //沒有就創建
        return shortURL.create({
          URLId,
          originURL
        })
          .then((shortURL) => { res.render('shorted', { URLId: shortURL.URLId }) })
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

router.get('/:url', (req, res) => {
  res.render('error', { url: req.params.url })
})
module.exports = router