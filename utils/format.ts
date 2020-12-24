export interface MoneyFormat {
  moneyFormatValue?: string;
  numberValue: number;
}

export const stringValue2MoneyFormat = (stringValue: string): MoneyFormat => {
  const numberValue = Number(stringValue.replace(/\D/g, ''));
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(numberValue)) {
    return { numberValue };
  }
  const prepend = numberValue < 0 ? '-$' : '$';
  const newValue = `${numberValue} `;

  const moneyFormatValue =
    prepend +
    newValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',');

  return { moneyFormatValue, numberValue };
};
