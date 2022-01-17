function solution3(num) {
  let answer = 0;
  while (num != 1) {
    if (num % 2 == 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
    if (answer > 500) {
      answer = -1;
    }
  }
  return answer;
}
console.log(solution3(6));
