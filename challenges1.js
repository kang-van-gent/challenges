console.log("Challenge 1");

function threeFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("ThreeFive");
    } else {
      if (i % 3 == 0) {
        console.log("Three");
      } else if (i % 5 == 0) {
        console.log("Five");
      } else {
        console.log(i);
      }
    }
  }
}

threeFive(100);
