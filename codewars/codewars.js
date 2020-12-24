const kata8 = {
  // multiply the two numbers given as arguments and 
  // out the total
  multiply(a, b) {
    return a * b
  },

  /////////////////////////////////////////////////
  //Complete the function which takes two arguments 
  //and returns all numbers which are divisible by 
  //the given divisor. First argument is an array 
  //of numbers and the second is the divisor.

  //My solution:
  divisibleBy(numbers, divisor) {
    let divisibleNum = numbers.reduce((acc, num) => {
      if (num % divisor === 0) {
        acc.push(num)
      }
      return acc
    }, [])
    return divisibleNum
  },

  //Better solution:
//   divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
//   }
  
}

module.exports = {
  kata8
}