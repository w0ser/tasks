const myName = 'Sergey'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Chebotov Vladislav'
const reasonText = 'мама так сказала'
const numberOfMonth = 0

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду дайнный курс до
конца!`

console.log(myInfoText)

console.log(myInfoText.replaceAll('JavaScript', 'JAVASCVRIPT'))
console.log(myInfoText.length)
console.log(myInfoText[0], myInfoText[270])
