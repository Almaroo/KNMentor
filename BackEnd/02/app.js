const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const kompresja = async () => {
  const input = await getData();
  var compressed = "";
  var prevChar;
  var counter = 0;

  const rows = input.split("\n").map(row => row);
  rows.forEach(row => {
    console.log(row);
    var charArr = [...row];
    prevChar = charArr[0];
    console.log(charArr);
    charArr.forEach(char => {
      if (char === prevChar) {
        counter++;
      } else {
        compressed += prevChar;
        compressed += counter;
        counter = 1;
      }
      prevChar = char;
    });
    console.log(compressed);
    compressed = "";
    counter = 0;
  });
};

kompresja();
