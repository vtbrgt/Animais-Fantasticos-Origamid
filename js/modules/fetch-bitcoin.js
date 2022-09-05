<<<<<<< HEAD
export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
=======
export default function initFetchBitcoin() {}

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });

// https://blockchain.info/ticker
>>>>>>> eee1a9bdb16c6f84808f7a2c888afec21ea553af
