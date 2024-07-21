export const currencyFormatter = (amount: string) => {
  return amount
    ? '₦' +
        parseFloat(amount)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : 0;
};
