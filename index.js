function compactNumber(value) {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixNum = Math.floor(value.toString().length/3);

  let sortValue = parseFloat(suffixNum != 0 ? (value / 1000**suffixNum) : value)
  
  if (sortValue % 1 !=  0) {
    sortValue = sortValue.toFixed(1);
  }

  return sortValue + suffixes[suffixNum];
}

