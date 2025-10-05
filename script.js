// Urban Dictionary API project for INM410 assignment
// Allows user to enter a term and displays the first definition from Urban Dictionary

const apiKey = 'ec31e846b5msh54c61f8f4635cd0p15c05bjsn64a339c59f71'; // my RapidAPI key
const searchBtn = document.getElementById('searchBtn');
const termInput = document.getElementById('termInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const term = termInput.value.trim();
  if (!term) {
    alert('Please enter a term!');
    return;
  }

  const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (!data.list || data.list.length === 0) {
      resultDiv.innerHTML = 'No definition found.';
      return;
    }

    // show first definition
    const definition = data.list[0].definition;
    resultDiv.innerHTML = `<h3>${term}</h3><p>${definition}</p>`;
  })
  .catch(error => {
    console.error(error);
    resultDiv.innerHTML = 'Error fetching definition.';
  });
});


