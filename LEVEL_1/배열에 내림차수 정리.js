function solution14(n) {
  let answer = [];
  let num = n.toString();
  for (let a = num.length - 1; 0 <= a; a--) {
    answer.push(parseInt(num[a]));
  }
  return answer;
}
console.log(solution14(12345));
