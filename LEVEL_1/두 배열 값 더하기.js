function solution2(arr1, arr2) {
  let answer = [[]];
  answer = arr1;
  for (let i = 0; i < arr2.length; i++) {
    for (let a = 0; a < arr2[i].length; a++) {
      answer[i][a] += arr2[i][a];
    }
  }
  return answer;
}
console.log(
  solution2(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
