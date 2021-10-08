const cardNumber = document.querySelector('.card__number'),
  priceRange = document.querySelector('.card__range-input')
  

priceRange.addEventListener('change', () => {
  const currentPrice = priceRange.value
  const numberFormat = `$${currentPrice}.00`
  cardNumber.textContent = numberFormat
  document.documentElement.style.setProperty('--bar-price', gerPercentage(32, currentPrice))
})

const gerPercentage = (number, total) =>`${parseInt((total*100) /  number)}%`;