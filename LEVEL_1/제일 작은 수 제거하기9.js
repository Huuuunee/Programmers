function solution9(arr) {
  let answer = [];
  let num = 0;
  num = arr[0];
  for (let a = 0; a < arr.length; a++) {
    num = num < arr[a] ? num : arr[a];
  }
  for (let b = 0; b < arr.length; b++) {
    if (arr[b] != num) {
      answer.push(arr[b]);
    }
  }
  return answer.length == 0 ? [-1] : answer;
}
console.log(solution9([10]));
