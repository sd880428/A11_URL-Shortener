const shortURL = require('../shortURL')
const db = require('../../config/mongoose')

db.once('open', () => {
  shortURL.create({
    URLId: 'Ab123',
    originURL: 'https://www.google.com.tw/?gws_rd=ssl'
  },
  {
    URLId: '123AB',
    originURL: 'https://www.youtube.com/'
  })

  console.log('seeder has created!')
})