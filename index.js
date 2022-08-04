function countDown(n) {
  let num = [];
  for (let i = 0; i <= n; i += 1) {
    num.unshift(i);
  }
  for (let i of num) {
    console.log(i);
  }
}

function writeCards(n, k) {
  let names = [];
  for (let i of n) {
    let mes = `Thank you, ${i}, for the wonderful ${k} gift!`;
    names.push(mes);
  }
  return names;
}
writeCards(["enock", "mokua"], "sad")