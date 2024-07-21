export const currencyFormatter = (amount: string) => {
  return amount
    ? '₦' +
        parseFloat(amount)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : 0;
};

export const capitalizedSplitWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
