function solution(a, b) {
  let answer = 0;
  if (a == b) {
    answer = a;
    return answer;
  }
  for (a < b ? a : b; a < b ? a < b : b < a; a < b ? a++ : b++) {
    answer += a < b ? a : b;
  }
  return (answer += a < b ? b : a);
}

