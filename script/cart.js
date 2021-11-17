const $cart = document.querySelector('.cart'),
      $cartIcon = $cart.querySelector('.cart__icon'),
      $cartCloseBtn = $cart.querySelector('.cart__close-btn'),
      $cartItems = $cart.querySelectorAll('.cart__item'),
      $cartItemCloseBtns = $cart.querySelectorAll('.cart__item-btn--del'),
      $cartClearBtn = $cart.querySelector('.cart__btn--clear')

$cartIcon.addEventListener('click', () => {
  if (!$cart.classList.contains('cart--active')) {
    $cart.classList.add('cart--active')
  }
})

$cartCloseBtn.addEventListener('click', () => {
  if ($cart.classList.contains('cart--active')) {
    $cart.classList.remove('cart--active')
  }
})

function removeCartItem(e) {
    const $closeButton = e.target
    let cartItemId = $closeButton.parentNode.getAttribute('data-id')
    if($closeButton.classList.contains('cart__item-btn--del')) {
      let newData = getCartData('cart')

      if (newData[cartItemId][2] > 1) {
        newData[cartItemId][2] -= 1
        renderItemInCart(cartItemId)
      } else {
        delete newData[cartItemId]
        $closeButton.parentNode.remove()
      }

      setCartData(newData, 'cart')
    }

    if(!$cartList.children.length) {
      $cartList.removeEventListener('click', removeCartItem)
    }
}

$cartClearBtn.addEventListener('click', () => {
  $cartList.innerHTML = ''
  localStorage.removeItem('cart');
  $cartList.removeEventListener('click', removeCartItem)
})
