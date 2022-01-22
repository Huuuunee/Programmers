function solution18(seoul) {
  let answer = "";
  seoul.map((a, b, c) => {
    if (a == "Kim") {
      console.log(b);
      return (answer = b);
    }
  });
  return "김서방은 " + answer + "에 있다";
}
console.log(solution18(["Jane", "Kim"]));
