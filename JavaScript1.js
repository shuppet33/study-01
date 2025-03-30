// Для чего используются операторы instanceof, typeof?

//////////////////////////// instanceof
//////////////////////////// Проверка, принадлежит ли объект классу

let a
let b

class Human {}
let alena = new Human()

// console.log(alena instanceof Human) // true
// console.log(2 instanceof Human) // false


// Функция конструктор

function Rabbit() {}
let bob = new Rabbit()
// console.log(bob instanceof Rabbit) // true





class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.alena) return true
    }
}

let obj = {alena: 'Alenka loh'}
// console.log(obj instanceof Animal)



const myInstanceof = (obj, constructor) => {
    if (Object.hasOwn(constructor, Symbol.hasInstance)) {
        return constructor[Symbol.hasInstance](obj)
    }

    if (obj.__proto__ === undefined) return false

    if (obj.__proto__ === constructor.prototype) {
        return true
    }

    return myInstanceof(obj.__proto__, constructor)
}

myInstanceof(alena, Human) // true


















////////////// Temporal Dead Zone
////////////// Временная мертвая зона

// TDZ -- это явление, которое возникает, в момент объвления переменной, значение которой, не было объявлено.


// console.log(x) // Ошибка
// let x
//
//
// let x = x
//
//
// let x = 'aaaa';
// (function() {
//     console.log(x)
//     let x = 'bbbb'
// }())
//
//
// let a = f()
// b = 2
// function f() { return b }
//
//
// (function (a = b, b) {
//     // console.log(a , b)
// })
//
//
// let user = {d: 'gggg'}
// let admin = user // {d: 'gggg'}
//
// user = null

// console.log(user, admin) // null, {d: 'gggg'}











//////////////////////////// ПРЕОБРАЗОВАНИЕ ТИПОВ ////////////////////////////


Boolean([]) // true
Boolean({}) // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean(1) // true
Boolean('0') // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(Symbol) // true


String(null) // 'null'
String(undefined) // 'undefined'
String({}) // '[object Object]'
String({a: 1}) // '[object Object]'
String([]) // ''
String([1, 2]) // '1,2'
String(Symbol) // 'function Symbol() { [native code] }'
String(Symbol()) // 'Symbol()'



Number('2.1p') // NaN
Number('2.1') // 2.1
Number(undefined) // NaN
Number(null) // 0
Number([]) // 0
Number([5]) // 5
Number([5, 5]) // NaN
Number({}) // NaN
Number({a: 1}) // NaN
Number(Symbol) // NaN

a = !!null // null - false, !null - true, !!null - false и так далее

parseInt('ppp13') // NaN
parseInt('13ppp') // 13

parseInt('0101px', 2) //  5 (2ой аргумент говорит о системе счисления)

// function myParseInt(str) {
//     let count = 0
//     let res = ''
//
//     for (let i = 0; i < str.length; i++) {
//
//         if (typeof Number(str[i]) !== 'number') {
//
//         }
//     }
//
//     return res
// }
//
// myParseInt('1p23')













//////////////////////////// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ////////////////////////////


'||' // ИЛИ Находит первое true

a = true || true // true
a = true || false // true
a = false || true // true
a = false || false // false


a = 1 || 0  // 1 = true, 0 = false --> true

a = a || a || a // вычисляет результат слева на право, ищет true

a = 1 || 0 // 1
a = true || 'gggg' // true
a = null || 1 // 1
a = null || 0 || 1 // 1 (первое истинное)
a = undefined || null || 0 // 0 (поскольку все ложно, возвращается последнее значение)


'||=' // Оператор логического присваивания ИЛИ
// a || (a = b)
// a ||= b Если а ложно, то а = b

// то же самое
a = false
if (a === false) {
    a = 'alenka' // alenka
}


'&&' // И если один false = false иначе true

a = true && true // true
a = false && true // false
a = true && false // false
a = false && false // false

a = a && a && a // ищет false слева на право

// ПРИОРИТЕТ && БОЛЬШЕБ ЧЕМ ||

a = 0 || 1 && 2 || 4 // тоже самое что 0 || (1 && 2) || 4
// Ответ 2

'&&=' // Оператор логического присваивания И
// a && (a = b) то же самое, что и ||=, но наоборот

a = true
if (a === true) {
    a = 'alenka'  // alenka
}

'!' // НЕ

a = false

a = !a // возвращает противоположное boolean значение
a = !!a // true

// ! САМЫЙ БОЛЬШОЙ ПРИОРИТЕТ


'??' // Оператор нулевого слияния
// показывает первое значение, которое определено

a = a ?? b
a =  (a !== null && a !== undefined) ? a : b // тоже самое

a = b ?? 'aaaa' // 'aaaa' так как b НЕ определено

b = 'bbbb'

a = b ?? 'aaaa' // 'bbbb' так как b определено


a = undefined
b = undefined // значение не определено
a = a ?? b // undefined



'??=' // Оператор нуливого присваивания
a = a ??= b // тоже самое что

a = null
if (a === null || a === undefined) {
    a = 'alenka' // или значение b
}

// console.log(a) // 'alenka'









////////////////////////// ОПЦИОНАЛЬНАЯ ЦЕПОЧКА ?. /////////////////////////



