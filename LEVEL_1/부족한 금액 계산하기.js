function solution(price, money, count) {
  let answer = price;
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += price;
    price += answer;
  }
  if (money - sum < 0) {
    return (money - sum) * -1;
  } else return (answer = 0);
}
