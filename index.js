import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_GYuhrC4gpbz25CkHu1avIXqO4U4yWa0tnTvwkWby"
);

convertCurrency("INR", "USD", 3);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const mltiplier = res.data[toCurrency];
  return mltiplier * units;
}
