// #### Exercise 31
// Create an array with 5 numbers. Ask the user for an index.
//     Alert the user of the value of the array's index.
//
// #### Exercise 32
// Create an array with 5 numbers. Ask the user for the length of the array you want to print.
//     Alert the user of the array from 0 to their input.
//
//     #### Exercise 33
// Ask the user to enter a word to add to an array. Add the user input into the array.
//     If the user enters a 'q', stop asking them to enter a word.

//Exercise 31
let numbers=[3,6,9,12,15];
let userInput=parseInt(prompt("Enter an Index: "));

function alertIndex(index)
{
     userInput;
    alert(numbers[index])
}
alertIndex(userInput);

//Exercise 32- the question was confusing
let array= [2,4,6,8,10];
let lengthInput=parseInt(prompt("enter the length for 2,4,6,8,10" ));
for(i=0;i<=lengthInput;i++)
{
  console.log(i);
    console.log(array);
}

//Exercise 33
let wordInput=prompt("Enter a word: ");
let wordArray=["timothy","steve","mcqueen","tyler"];
let isvalid=true;
wordArray.push(wordInput);
console.log(wordArray);
while(wordInput!=="q")
{
  wordInput=prompt("Enter a word: ");
}
if(wordInput==="q")
{
    isvalid
}