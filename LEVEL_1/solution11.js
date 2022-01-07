function solution11(n) {
  let answer = "";
  let arr = [];
  let bab = n.toString();
  for (let a = 0; a < bab.length; a++) {
    arr.push(parseInt(bab[a]));
    arr.sort((a, b) => b - a);
    console.log(arr);
  }
  arr.map((a, b) => {
    return (answer += a);
  });

  return parseInt(answer);
}
console.log(solution11(118372));
