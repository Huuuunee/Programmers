function solution17(n) {
  let answer = "";
  for (let num = 1; num <= n; num++) {
    answer += num % 2 == 0 ? "박" : "수";
  }

  return answer;
}
console.log(solution17(3));
