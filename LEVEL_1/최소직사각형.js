function solution(sizes) {
  let answer = 0;
  let maxW = [];
  let minH = [];
  for (let i = 0; i < sizes.length; i++) {
    maxW.push(Math.max(sizes[i][0], sizes[i][1]));
    minH.push(Math.min(sizes[i][0], sizes[i][1]));
  }
  maxW.sort((a, b) => a - b);
  minH.sort((a, b) => a - b);

  return (answer = maxW[maxW.length - 1] * minH[minH.length - 1]);
}
