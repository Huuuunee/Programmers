function solution12(n) {
  let answer = 0;
  let num = 1;
  while (1) {
    if (n == num * num) {
      answer = ++num * num;
      break;
    } else if (n < num * num) {
      answer = -1;
      break;
    }
    num++;
  }
  return answer;
}
console.log(solution12(121));
