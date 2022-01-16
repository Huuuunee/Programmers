function solution7(arr) {
  let answer = 0;
  let result = 0;
  for (let a = 0; a < arr.length; a++) {
    result += arr[a];
  }
  answer = result / arr.length;
  return answer;
}
console.log(solution7([1, 2, 3, 4]));
