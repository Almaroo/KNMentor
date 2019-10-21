const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const histogram = async () => {
  const input = await getData();

  //Init dictionary
  const dict = {};

  for (var i = -10; i < 11; i++) {
    dict[i] = 0;
  }
  input.split("\n").forEach(row => {
    var number = Number(row);

    //Najbardziej jajcarski switch jakiego w życiu widziałem
    switch (true) {
      case number > -11 && number < 11:
        dict[number]++;
        break;
      default:
        console.log("invalid input");
        break;
    }
  });

  for (var i = -10; i < 11; i++) {
    console.log(createHistogramRow(i, dict[i]));
  }
};

const createHistogramRow = (number, apperances) => {
  var histogramRow = ` ${number > -10 ? " " : ""}${
    number >= 0 && number < 10 ? " " : ""
  }${number}:|`;

  for (var i = 0; i < 29; i++) {
    if (apperances > 0) {
      histogramRow += "*";
      apperances--;
    } else {
      histogramRow += " ";
    }
  }

  switch (true) {
    case apperances > 1:
      histogramRow += "+";
      break;
    case apperances == 1:
      histogramRow += "*";
      break;
    default:
      histogramRow += " ";
      break;
  }

  histogramRow += "|";

  return histogramRow;
};

histogram();
