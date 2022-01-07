function solution13(n) {
  let answer = 0;
  while (1) {
    if (n == 0) break;
    else {
      answer += n % 10;
      n = Math.floor(n / 10);
    }
  }
  return answer;
}
console.log(solution13(123));
