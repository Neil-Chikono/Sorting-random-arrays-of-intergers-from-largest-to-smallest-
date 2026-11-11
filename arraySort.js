let numbers = [5, 8, 2, 1, 7, 10, 11] 


function sortArray(numbers) {

//loop through the array

for (let i = 0; i < numbers.length; i++) {

//compare neighnouring numbers 

for ( let j = 0; J < numbers.length - i - 1; j++) {

// check if the current number is larger 
if (numbers[j] < numbers[j + 1] {

  // swap the numbers 

  let temp = numbers[j]; 

  numbers[j] = numbers[ j + 1 ]; 

  numbers[ j + 1] = temp; 
  
}

}

}


return numbers; 

console.log(sortArray([5, 8, 2, 1, 7, 10, 11])); 
