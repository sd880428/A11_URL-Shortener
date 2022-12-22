function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generateUrl() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '12345667890'

  let collection = lowerCaseLetters + upperCaseLetters + numbers

  let password = ''
  for (let i = 0; i < 5; i++) {
    password += sample(collection.split(''))
  }
  return password
}

generateUrl()

module.exports = generateUrl