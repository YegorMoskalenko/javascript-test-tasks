// todo Task 3

const biggerNumber = num => {
    let strNum = num.toString()
    let arrOfStrNums = strNum.split('')
    let arrOfNums = []

    for(let item of arrOfStrNums){
        let itemNum = +item
        arrOfNums.push(itemNum)
    }

    let biggerNumArr = arrOfNums.sort().reverse()
    let biggerNum = +biggerNumArr.join('')

    if(biggerNum === num){
        return -1
    } else {
        return biggerNum
    }
}

console.log(biggerNumber(23)) // 32
console.log(biggerNumber(624)) // 642
console.log(biggerNumber(2018)) // 8210
console.log(biggerNumber(531)) // -1
console.log(biggerNumber(111)) // -1
console.log(biggerNumber(9)) // -1




console.log('====================================================================================================')




// todo Task 2

const queueTime = (arrPeople, cashRegisters) => {

    if(arrPeople.length === 0){
        return 0
    }

    if(arrPeople.length <= cashRegisters){
        return Math.max(...Object.values(arrPeople))
    }

    let arrOfCashRegisters = {}
    for(let cashRegister = 1; cashRegister <= cashRegisters; cashRegister++){
        for(let i = 0; i < arrPeople.length; i++){
            if(arrOfCashRegisters[cashRegister] === undefined){
                arrOfCashRegisters[cashRegister] = arrPeople[i]
            }else if(i === arrPeople.length - 1){
                arrPeople.splice(0, 1)
            }
        }
    }

    for(let index in arrPeople){
        let values = Object.values(arrOfCashRegisters)
        let min = Math.min(...values)

        for(let j in arrOfCashRegisters){
            if(arrOfCashRegisters[j] === min){
                arrOfCashRegisters[j] += arrPeople[index]
            }
        }
    }

    return Math.max(...Object.values(arrOfCashRegisters))
}


console.log(queueTime([11, 23, 45, 17, 8, 505, 10, 1500], 15)) // 1500
console.log(queueTime([10, 2, 1, 3, 5, 5], 2)) // 15
console.log(queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1)) // 418
console.log(queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4)) // 162
console.log(queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5)) // 65
console.log(queueTime([], 5)) // 0




console.log('====================================================================================================')




// todo Task 1

const sortString = str => {

    let arrOfStrs = str.split(' ')
    const newArr = []
    let num = 0

    if(str.length === 0){
        return `''`
    }

    for(let i = 0; i < arrOfStrs.length; i++){
        for(let j = 0; j < arrOfStrs[i].length; j++){
            for(let g = 0; g <= 9; g++){
                if(arrOfStrs[i][j] == g){
                    num = +arrOfStrs[i][j]
                }
            }
        }
        newArr[num] = arrOfStrs[i]
    }

    const filteredNewArr = newArr
        .filter(el => el !== null && typeof el !== 'undefined' && el !== '')
        .filter(el => el.includes('1') || el.includes('2') || el.includes('3') || el.includes('4') || el.includes('5') || el.includes('6') || el.includes('7') || el.includes('8') || el.includes('9'))

    return filteredNewArr.join(' ')
}

console.log(sortString('kazan g5et ski3lls on6 use1 bl0a java your2 to4 7top'))
console.log(sortString(''))
console.log(sortString('practic3 h4rder yo1u 2hould’'))
