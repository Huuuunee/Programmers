function solution21(n) {
  let answer = 0;
  for (let b = 1; b <= n; b++) {
    if (n % b == 1) {
      answer = b;
      break;
    }
  }
  return answer;
}
console.log(solution21(10));
