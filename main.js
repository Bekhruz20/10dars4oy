// let name4 = prompt('Ismingizni kiriting')
// let name2 = prompt('Ismingizni kiriting')

// function name3() {
//     alert(`${name4} va ${name2} Sayitga hush kelibsiz` )
// }

// name3()

// let num = +prompt('son kiriting')
//  let num1 = +prompt('Son kiriting')

//  function nums() {
//     alert(`${num} + ${num1} = ${npn}`  )
// }

// let npn= (num+num1)

// nums(npn)

// let name4 = prompt('Ismingizni kiriting')
// name4.toLowerCase
// function name3() {
//     if (name4.indexOf('bek')){
//         alert(`${name4} da "bek" mavjud `)
//     } else  if (name4.noindexOf('bek')){
//         alert(`${name4} ismida da "bek" mavjud emas `)
//     }
// }

// name3()

let num = +prompt('Son kiriting')
let num1 = +prompt('Ikkinchi sonni kiriting')

function nums() {
    if (num>num1) {
        alert(`${num} soni ${num1} sonidan katta`)
    } else if (num<num1) {
        alert(`${num1} soni ${num} sonidan katta`)
    } else {
        alert(`${num} soni ${num1} soniga teng`)
    }
}

nums()