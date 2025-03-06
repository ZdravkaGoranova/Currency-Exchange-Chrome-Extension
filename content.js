const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey = 'iLyib10uOg8pKrrpE0INgw==BnGZRSVQRYcoHvSi';
const apiUrl = 'https://api.api-ninjas.com/v1/exchangerate?pair=GBP_';

convert.addEventListener('click', () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiUrl + currencyTotal;

  fetch(url, {
    headers: {
      'X-Api-Key': apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const rate = data.exchange_rate;
      const resultPrice = amountTotal * rate;

      console.log('result', resultPrice);
      result.innerHTML = `${amountTotal} ${currencyTotal}=${resultPrice.toFixed(
        2,
      )} USD`;
    })
    .catch((error) => {
      console.error('Request failed', error);
      result.innerHTML = 'Ann error occurred please try again later.';
    });
});
