/**
export const CURRENCIES = Object.freeze({
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  INR: 'INR',
  AUD: 'AUD',
  CAD: 'CAD',
});

export const CURRENCIES = Object.freeze({
  USD: Object.freeze({
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    minorUnit: 2, // cents
    locale: "en-US",
  }),

  EUR: Object.freeze({
    code: "EUR",
    name: "Euro",
    symbol: "€",
    minorUnit: 2,
    locale: "de-DE",
  }),

  GBP: Object.freeze({
    code: "GBP",
    name: "British Pound Sterling",
    symbol: "£",
    minorUnit: 2,
    locale: "en-GB",
  }),

  INR: Object.freeze({
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    minorUnit: 2,
    locale: "en-IN",
  }),

  AUD: Object.freeze({
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    minorUnit: 2,
    locale: "en-AU",
  }),

  CAD: Object.freeze({
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    minorUnit: 2,
    locale: "en-CA",
  }),
});
 */

const createCurrency = (code, name, symbol, minorUnit, locale) =>
  Object.freeze({ code, name, symbol, minorUnit, locale });

export const CURRENCIES = Object.freeze({
  USD: createCurrency("USD", "United States Dollar", "$", 2, "en-US"),
  EUR: createCurrency("EUR", "Euro", "€", 2, "de-DE"),
  GBP: createCurrency("GBP", "British Pound Sterling", "£", 2, "en-GB"),
  INR: createCurrency("INR", "Indian Rupee", "₹", 2, "en-IN"),
  AUD: createCurrency("AUD", "Australian Dollar", "A$", 2, "en-AU"),
  CAD: createCurrency("CAD", "Canadian Dollar", "C$", 2, "en-CA"),
});

/**
 * Currency codes enum (for Mongoose)
 */
export const CURRENCY_CODES = Object.freeze(Object.keys(CURRENCIES));
