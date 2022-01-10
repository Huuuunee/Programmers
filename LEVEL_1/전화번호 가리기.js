function solution(phone_number) {
  let answer = "";
  let newString = "";
  let test = phone_number.length - 4;
  for (let i = 0; i < test; i++) {
    answer += "*";
  }
  answer = answer + phone_number.substring(test);
  return answer;
}
