console.log(Number(' 1 2 3 4 5')) //nan
console.log(Number('1234 5')) //nan
console.log(Number('12345')) //12345
console.log(String(false)) //false
console.log(Boolean(0000000)) //false
console.log(Boolean(0.0000001)) //true
console.log(Boolean(undefined)) //false
console.log(Number('100f')) //nan
console.log(Number('100')) //100
console.log(Number('000001')) //1