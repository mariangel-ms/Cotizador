const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector('#amount');
const coinInfo = document.querySelector("#coin-info");

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
coinInfo.innerHTML = `<span class="loader"></span>`;
        coinInfo.classList.add("show"); 
        
  //El primer await es para esperar la peticion, el segundo await es esperar el procesamiento de esa respuesta
  //Fetch es el intermediario entre nuestro software y la peticion que le estamos haciendo a la API
  //La API es asincrona pq se puede demorar

const response = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json();
const price = response.DISPLAY[cryptoSelected][coinSelected].PRICE;
const priceHigh= response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR;
const priceLow = response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR;
const variation = response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR;

if (amountValue === "") {
    coinInfo.innerHTML = `
          <p class="info">El precio es: <span class="price">${price}</span></p>
          <p class="info">El precio mas alto es: <span class="price">${priceHigh}</span></p>
          <p class="info">El precio mas bajo es: <span class="price">${priceLow}</span></p>
          <p class="info">Variacion 24H: <span class="price">${variation}%</span></p>
`
} else {
  const buy = Number(amountValue) / response.RAW[cryptoSelected][coinSelected].PRICE;
  coinInfo.innerHTML = `
          <p class="info">El precio es: <span class="price">${price}</span></p>
          <p class="info">El precio mas alto es: <span class="price">${priceHigh}</span></p>
          <p class="info">El precio mas bajo es: <span class="price">${priceLow}</span></p>
          <p class="info">Variacion 24H: <span class="price">${variation}%</span></p>
          <p class="info">Puede comprar: <span class="price">${buy.toFixed(3)} ${cryptoSelected}</span></p>
`
}
} catch(error) {
console.log(error);
}
});