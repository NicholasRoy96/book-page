import store from '../store'

export function formatCurrency (item) {
  if (!item || !item.prices || !item.prices.length) {
    return {}
  }
  const price = item.prices.find(price => price.locale === store.state.currency.currency)
  return {
    currency: price.locale,
    value: price.amount
  }
}

export function findBookAuthor (item) {
  if (!item) return ''
  const authorObj = item.contributors.find(contributor => contributor.role_id === 'A01')
  return authorObj.contributor
}