// Your code here
// map-like methods
const mapToNegativize = (arr) => {
    let newArr = []
    arr.forEach(element => {
       newArr.push(-element)
    })
    return newArr
}

const mapToNoChange = (arr) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(element)
    })
    return newArr
}

const mapToDouble = (arr) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(element * 2)
    })
    return newArr
}

const mapToSquare = (arr) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(element * element)
    })
    return newArr
}

// reduce methods
const reduceToTotal = (arr, num = 0) => {
    arr.forEach(element => {
        num +=element
    })
    return num
}

const reduceToAllTrue = (arr) => {
    let valueArray = []
   arr.forEach(element =>{
       if(element){
           valueArray.push(true)
       } else { valueArray.push(false)}
   })
   return true ? !valueArray.includes(false) : false
}

const reduceToAnyTrue = (arr) => {
    let valueArray = []
   arr.forEach(element =>{
       if(element){
           valueArray.push(true)
       } else { valueArray.push(false)}
   })
return true ? valueArray.includes(true) : false
}
