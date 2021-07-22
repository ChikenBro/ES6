const numbers = [1, 1, 1, 1, 3, 4];
const norepeatNumbers = new Set(numbers);
console.log(norepeatNumbers);
// size add() delete() clear() has()
for (let value of norepeatNumbers.values())
  console.log(value);
norepeatNumbers.forEach((item, key, ownSet) => {
  console.log(item, key, ownSet);
});
const resultNumbers = [...norepeatNumbers];
console.log(resultNumbers);