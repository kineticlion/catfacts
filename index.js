const fact = document.getElementById('fact');
const author = document.getElementById('author');

let factContainer = [];

let fetchData = async () =>
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((data) => (factContainer = data['all']))
    .catch((err) => console.log(err));

fetchData().then((res) => {
  const currentFact = getRandomFact(factContainer);
  fact.innerHTML = currentFact.text;
  author.innerHTML = `- ${currentFact.user.name.first} ${currentFact.user.name.last}`;
});

function getRandomFact(factContainer) {
  const randomNumber = Math.round(
    Math.random() * (factContainer.length - 0) + 0
  );
  return factContainer[randomNumber];
}

const randomNumber = Math.round(Math.random() * factContainer.length);
console.log(randomNumber);
