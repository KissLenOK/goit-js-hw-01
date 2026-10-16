function getElementWidth(content, padding, border) {
  const totalWidth = content + padding * 2 + border * 2;
  return totalWidth;
}

console.log(getElementWidth(48.18, 35.1, 1));
console.log(getElementWidth(750, 0, 0));
console.log(typeof getElementWidth());
