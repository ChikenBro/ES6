const person = 'Jelly';
const age = 18;
const sentance = person + ' is ' + age + ' year old.';
const es6Sentance = `${person} is ${age + 1} year old`;
console.log(sentance);
console.log(es6Sentance);

const template = `
<div>
  <p>${person}</p>
<div>
`.trim();
console.log(template);