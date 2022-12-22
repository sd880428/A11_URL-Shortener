const copyBtn = document.querySelector('.copy-btn')
const shorturl = document.querySelector('.shorturl')

copyBtn.addEventListener('click', function copy() {
  let copyText = shorturl.textContent
  navigator.clipboard.writeText(copyText)
  alert('已複製網址!')
})
