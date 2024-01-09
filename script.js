function getArea(panjang, lebar) {
  const getArea = panjang * lebar;
  return getArea;
}
console.log(getArea(5, 4));

function kelilingPersegiPanjang(panjang, lebar) {
  const kelilingPersegiPanjang = panjang * 2 + lebar * 2;
  return kelilingPersegiPanjang;
}
console.log(kelilingPersegiPanjang(2, 5));

function bilanganBulat(n) {
  const bilanganBulat = n % 2 === 0 ? `bulat` : `ganjil`;
  return bilanganBulat;
}
console.log("angka tersebut termasuk bilangan " + bilanganBulat(4));

function kelilingLingkaran(r) {
  const kelilingLingkaran = 2 * Math.PI * r;
  return kelilingLingkaran;
}
console.log(kelilingLingkaran(5));

function luasLingkaran(r) {
  const luasLingkaran = Math.PI * (r * r);
  return luasLingkaran;
}
console.log(luasLingkaran(10));

function getScore(score) {
  if (score > 30) {
    result = "nilai anda tidak sesuai";
  } else if (score >= 25) {
    result = `nilai anda ${score} Grade A`;
  } else if (score >= 20) {
    result = `nilai anda ${score} Grade B`;
  } else if (score >= 15) {
    result = `nilai anda ${score} Grade C`;
  } else if (score >= 10) {
    result = `nilai anda ${score} Grade D`;
  } else if (score >= 5) {
    result = `nilai anda ${score} Grade E`;
  } else if (score >= 0) {
    result = `nilai anda ${score}  Grade F`;
  }
  return result;
}
console.log(getScore(40));

// const number = [20, 50, 40, 70];
// console.log(getSecondMax());

var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "steve jobs",
    author: "Walter Issacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay : The  Final Book of the hunger Games",
    author: "Suzzane Collins",
    readingStatus: false,
  },
];
for (i = 0; i < 3; i++) {
  if ((library[i].readingStatus = true)) {
    console.log("you have read ");
  } else {
    console.log("you have not read ");
  }
}

function getLetter(s) {
  let letter;
  switch (s) {
    case "a":
    case "i":
    case "u":
    case "e":
    case "o":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      letter = "D";
      break;
  }
  return letter;
}
console.log(getLetter("z"));
