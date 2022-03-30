function solution(a, b) {
  let answer = "";
  let result = 4;
  const DayEng = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const Day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  if (a === 2 && b === 29) return (answer = "MON");
  for (let i = 0; i < a - 1; i++) {
    sum += Day[i];
  }
  sum += b - 2
  for (let j = 0; j <= sum; j++) {
    if (result == 6) {
      result = -1;
    }
    result += 1;
  }
  return (answer = DayEng[result]);
}
