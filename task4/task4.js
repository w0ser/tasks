let userName = prompt('Как вас зовут?')
let userAge = prompt('Сколько вам лет?')

userName = userName.toLowerCase().trim()
userAge = Number(userAge.trim())

alert(`Вас зовут ${userName} и вам ${userAge} лет`)