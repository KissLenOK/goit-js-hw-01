function makeTransaction(quantity, pricePerDroid) {
  const total = quantity * pricePerDroid;
  return `Ваше замовлення у кількості ${quantity} коштує ${total}`;
}

console.log(makeTransaction(35, 800));
console.log(makeTransaction(12, 700));
console.log(makeTransaction(108, 450));
