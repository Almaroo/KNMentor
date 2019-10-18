const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const odwrocBity = async () => {
  const re = /[+-]?\d+/g; //bardzo ważna flaga g -> globally bez niej re.exec() zatrzyma się na pierwszym znalezionym elemencie
  const re1 = /1/g;
  const input = await getData();

  const rows = input.split("\n").map(row => row);
  rows.forEach(row => {
    var m;
    var i = 0;
    const tmp = [];

    do {
      m = re.exec(row);
      //re.exec() zwraca tablicę czyli obiekt w JS, który niejawnie jest konwertowany do TRUE
      //w przypadku braku dopasowania zwraca null, które w niejawnej konwersji równa się FALSE
      if (m) {
        tmp[i] = m[0];
        i++;
      }
    } while (m);

    //Działa dla całkowitych nieujemnych
    //Dla ujemnych nie radzi sobie

    //console.log((tmp[0] ^ tmp[1]).toString(2));

    //EDIT działa dla ujemnych: udawane przesunięcie bitowe w prawo z zachowaniem znaku rzutuje liczbę na int32
    //console.log(((tmp[0] ^ tmp[1]) >>> 0).toString(2));

    i = 0;
    do {
      m = re1.exec(((tmp[0] ^ tmp[1]) >>> 0).toString(2));

      if (m) {
        i++;
      }
    } while (m);

    console.log(i);

    //Podliczamy jedynki w stringach
  });

  console.log(rows);
};

odwrocBity();
