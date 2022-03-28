function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  d.forEach((i) => {
    if (budget >= i) {
      budget -= i;
      answer += 1;
    } else if (budget < i) return false;
  });
  return answer;
}
