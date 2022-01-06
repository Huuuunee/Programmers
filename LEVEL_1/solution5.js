process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let j = 0; j < b; j++) {
    let c = "";
    for (let i = 0; i < a; i++) {
      c += "*";
    }
    console.log(c);
    c += "\n";
  }
});
