function whatever(num) {
  let result = [];

  for (let index = 1; index <= num; index++) {
    let word = [];

    if (index % 2 === 0) {
      word.push("yu");
    }
    if (index % 3 === 0) {
      word.push("gi");
    }
    if (index % 5 === 0) {
      word.push("oh");
    }

    if (word.length > 0) {
      result.push(word.join("-"));
    } else {
      result.push(index);
    }
  }

  return result;
}

whatever(30);
