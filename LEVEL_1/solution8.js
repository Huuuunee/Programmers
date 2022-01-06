function solution8(n, m) {
  let answer = [];
  let le = 1;
  let result = 0;
  while (1) {
    if (le % n == 0 && le % m == 0) {
      result = le;
      break;
    }
    le++;
  }
  let gcd = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  answer = [gcd, result];
  return answer;
}
console.log(solution8(3, 12));
