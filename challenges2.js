console.log("Challenge 2");

function sum2Element(num, sum) {
  for (let i = 0; i < num.length; i++) {
    for (let x = i + 1; x < num.length; x++) {
      if (num[i] + num[x] == sum) {
        // console.log(num[i] + "+" + num[x] + "=" + sum);
        console.log("Output: " + i + "," + x);
        console.log(
          "Explanation: Because nums[" + i + "] + nums[" + x + "] = " + sum
        );
        return;
      }
    }
  }

  console.log("Output: no out put");
  console.log("There is no two numbers that add up to " + sum);
}

sum2Element([2, 7, 11, 5], 9);
sum2Element([3, 2, 4], 6);
sum2Element([3, 1, 2, 3], 6);
sum2Element([3, 2], 3);
