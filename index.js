// Code your solution here!

function printString(myString){
  console.log(myString[0])
  if(myString.length > 1){
    printString(myString.substring(1, myString.length))
  }else{
    return true
  }
}


function reverseString(myString){
  let reversedString
  if(myString.length > 1){
    reversedString = myString[myString.length - 1] + reverseString(myString.substring(0, myString.length - 1))
  }else{
    return myString[0]
  }
  return reversedString
}

function isPalindrome(myString){
  if(myString.length === 1){
    return true
  }else if(myString[0] === myString[myString.length - 1]){
    return isPalindrome(myString.substring(1, myString.length - 1))
  }else{
    return false
  }
}

function addUpTo(array, index){
  if(index > 0){
    return addUpTo(array.splice(1), index - 1) + array[0]
  }else{
    return array[0]
  }
}

function maxOf(array){
  if(array.length > 1 && array[0] > array[array.length - 1]){
    return maxOf(array.splice(0, array.length - 1))
  }else if(array.length > 1 && array[0] < array[array.length - 1]){
    return maxOf(array.splice(1))
  }else{
    return array[0]
  }
}

function includesNumber(array, number){
  if(array[0] != number && array.length > 1){
    return includesNumber(array.splice(1), number)
  }else if(array[0] === number){
    return true
  }else{
    return false
  }
}
