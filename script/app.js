const $cardList = document.querySelector('.card__list')
const $cartList = document.querySelector('.cart__list')

window.onload = function() {
    let localStorageData = localStorage.cart
    console.log(localStorageData)
    setDataOnCard()
}

function setDataOnCard() {
    fetch('http://localhost:5500/db.json')
    .then(response => response.json())
    .then(json => returnCards(Object.values(json)))
}

function returnCards(data) {
    for (let i = 0; i < data.length; i++) {
      $cardList.insertAdjacentHTML('beforeend', setData(data[i]))
    }
}

function setData(item) {
    return `
      <li data-id="${item.id}" class="card">
          <img class="card__img" src="${item.img}" alt="">
          <div class="card__content">
            <h2 class="card__title">${item.title}</h2>
            <p class="card__desc">${item.desc}</p>
            <span class="card__price">${item.price}</span>
            <button type="button" class="card__btn card-add">Добавить в корзину</button>
          </div>
        </li>
    `
}

$cardList.addEventListener('click', (e) => {
    const $card = e.target.parentNode.parentNode
    const $addButton = e.target
    if ($addButton.classList.contains('card-add')) {
        addCardToLS($card)
        renderItemInCart($card.getAttribute('data-id'))
    }
    $cartList.addEventListener('click', removeCartItem)
})

function getCartData(from) {
    return JSON.parse(localStorage.getItem(from));
}

function setCartData(data, from) {
    localStorage.setItem(from, JSON.stringify(data));
}

function addCardToLS(card) {
    let localStorageData = getCartData('cart') || {},
        cardId = card.getAttribute('data-id'),
        cardTitle = card.querySelector('.card__title').innerHTML,
        cardPrice = card.querySelector('.card__price').innerHTML

    if(localStorageData.hasOwnProperty(cardId)){
        localStorageData[cardId][2] += 1;
    } else {
        localStorageData[cardId] = [cardTitle, cardPrice, 1];
    }

    setCartData(localStorageData, 'cart')
}

function renderItemInCart(dataId) {
    let storageData = getCartData('cart')

    $cartList.innerHTML = ''

    for (let i = 1; i <= 10; i++) {
        if(storageData.hasOwnProperty(i)){
            $cartList.innerHTML += cardsForCartItem(storageData[i], dataId)
        }
    }
}

function cardsForCartItem(data, dataId) {
    return `
    <li data-id="${dataId}" class="cart__item">
        <p class="cart__item-title">${data[0]}</p>
        <span class="cart__item-price">${data[1]}</span>
        <span class="cart__item-amount">${data[2]}</span>
        <button class="cart__item-btn cart__item-btn--del"></button>
    </li>
    `
}