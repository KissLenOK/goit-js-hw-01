function getShippingMessage(country, price, deliveryFee) {
  const total = price + deliveryFee;
  return `Вартість товару з доставкою в країну ${country} коштує ${total} UAH`;
}

console.log(getShippingMessage('Україна', 786, 50));
console.log(getShippingMessage('Германія', 999, 570));
console.log(getShippingMessage('Австрія', 15, 1200));
