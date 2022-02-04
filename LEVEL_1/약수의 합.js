function solution15(n) {
  let answer = 0;
  let num = 0;
  while (1) {
    if (n % num == 0) {
      answer += num;
    } else if (n < num) {
      break;
    } else if (n == 0) break;
    num++;
  }
  return answer;
}
console.log(solution15(12));
