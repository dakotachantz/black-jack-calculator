/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand) {
  let currentHand = 0;

  for (let i = 0; i < hand.length; i++) {

    if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")) {
      hand[i] = "10";
      currentHand += parseInt(hand[i]);
    } else if (hand[i] !== "A") {
      currentHand += parseInt(hand[i]);
    }
  }

  for (let k = 0; k < hand.length; k++) {
    if (hand[k] === "A") {
      if (currentHand >= 11) {
        hand[k] = "1";
        currentHand += parseInt(hand[k]);
      } else {
        hand[k] = "11";
        currentHand += parseInt(hand[k]);
      }

    }
  }
  console.log(hand, currentHand);
  return currentHand;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/