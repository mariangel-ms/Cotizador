const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector('#amount')
const infoDiv = document.querySelector("#coin-info");

form.addEventListener('submit', async e => {
    e.preventDefault() 
    console.log(coin.children);
    
  const coinSelected = [...coin.children].find(coin => coin.selected).value;
  const cryptoSelected = [...crypto.children].find(crypto => crypto.selected).value;
  const amountValue = amount.value;

  console.log(coinSelected);
    console.log(cryptoSelected);
  console.log(amountValue);
  
try {
const response = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json();
console.log(response.DISPLAY[cryptoSelected][coinSelected].PRICE);
console.log(response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR);
console.log(response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR);
console.log(response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR);

} catch(error) {
console.log(error);
}

infoDiv.classList.add("show");
});