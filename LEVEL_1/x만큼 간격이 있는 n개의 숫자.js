function solution(x, n) {
  let answer = [];
  let a = 0;
  for (let i = 0; i < n; i++) {
    a = a + x;
    answer[i] = a;
  }
  return answer;
}
