// Code your solutions in this file
// Array of names to thank
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(namesArray, giftType) {
  const thankYouMessages = [];

  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${giftType} gift!`);
  }

  return thankYouMessages;
}
const thankYouMessages = writeCards(names, "surprise");
console.log(thankYouMessages);

function countDown(number) {
    let i = number;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }  
countDown(5);