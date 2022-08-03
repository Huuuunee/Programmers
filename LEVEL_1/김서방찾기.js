function solution(seoul) {
  let answer = "";
  seoul.map((a, b, c) => {
    if (a == "Kim") {
      return (answer = b);
    }
  });
  return "김서방은 " + answer + "에 있다";
}
