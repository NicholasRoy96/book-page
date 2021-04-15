import Vue from 'vue'
import store from '../store'

Vue.filter('toLocalePrice', function (value)  {
  if (!value || !value.prices || !value.prices.length) {
    return ''
  }
  const price = value.prices.find(price => price.locale === store.state.currency.currency)
  return `${price.locale} ${price.amount}`
});