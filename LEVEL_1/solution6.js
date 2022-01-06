function solution6(x) {
  let answer = true;
  let newData = x.toString();
  let result = 0;
  const d = x;
  for (let a = 0; a < newData.length; a++) {
    console.log(x % 10);
    result += x % 10;
    x = Math.floor(x / 10);
  }
  if (d % result == 0) {
    answer = true;
  } else answer = false;
  return answer;
}

console.log(solution6(12));
