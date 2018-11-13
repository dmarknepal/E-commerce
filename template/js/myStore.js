// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }
//
//
//
//
// function ready() {
//     let removeCartItemsButtons = document.getElementsByClassName('close');
//     console.log(removeCartItemsButtons);
//
//     for (let i = 0; i < removeCartItemsButtons.length; i++) {
//         let button = removeCartItemsButtons[i];
//         button.addEventListener('click',removeCartItem);
//
//     }
//
//     }
//
//
//     let quantityInputs = document.getElementsByClassName('cart-qty-input');
//     for (let i = 0; i < quantityInputs.length; i++) {
//         let input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged)
//     }
//
// function quantityChanged(event) {
//     let input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     updateCartTotal()
// }
//
//
//     let addToCartButtons = document.getElementsByClassName('shop-item-button');
//    for (let i = 0; i < addToCartButtons.length; i++) {
//     let button = addToCartButtons[i];
//     button.addEventListener('click', addToCartClicked);
//
//
//
// }
//
//
// document.getElementsByClassName('btn btn-checkout')[0].addEventListener('click', purchaseClicked);
//
//
// function purchaseClicked() {
//     alert('Thank you for your purchase');
//     let cartItems = document.getElementsByClassName('cart-items')[0];
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal();
// }
//
//
//
//    function removeCartItem(event) {
//         let buttonClicked = event.target;
//         buttonClicked.parentElement.parentElement.parentElement.remove();
//         updateCartTotal()
//
//
//
//     }
//
//
//
// function addToCartClicked(event) {
//     let button = event.target;
//      let shopItem = button.parentElement.parentElement.parentElement;
//     let  title = shopItem.getElementsByClassName('product-item-name')[0].innerText;
//
//
//
//
//     let  price = shopItem.getElementsByClassName('product-item-price')[0].innerText;
//
//     let imageSrc = shopItem.getElementsByClassName('product-item-pics')[0].src;
//
//
//     console.log(title,price,imageSrc);
//     addItemToCart(title, price, imageSrc);
//     updateCartTotal()
// }
//
//
// function addItemToCart(title, price, imageSrc) {
//     let cartRow = document.createElement('div');
//
//     cartRow.classList.add('product-item');
//
//
//     let cartItems = document.getElementsByClassName('minicart-items')[0];
//      let cartItemNames = cartItems.getElementsByClassName('product-item-name');
//     for (let i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText === title) {
//             alert('This item is already added to the cart');
//             return
//         }
//     }
//
//
//
//
//     let cartRowContents = '<a class="product-item-photo" href="#" title="The Name Product">\n' +
//         '                                                        <img class="product-image-photo" src="images/media/index1/minicart.jpg" alt="The Name Product">\n' +
//         '                                                    </a>\n' +
//         '                                                    <div class="product-item-details">\n' +
//         '                                                        <strong class="product-item-name" >\n' +
//         '                                                            <a href="#" >$(title) </a>\n' +
//         '                                                        </strong>\n' +
//         '                                                        <div class="product-item-qty">\n' +
//         '                                                            <input class="cart-qty-input" type="number" value="2">\n' +
//         '                                                        </div>\n' +
//         '                                                        <div class="product-item-price">\n' +
//         '                                                            <span class="price" > 10 </span>\n' +
//         '                                                        </div>\n' +
//         '\n' +
//         '                                                            <button type="button" class="close" aria-label="Close">\n' +
//         '                                                                <span aria-hidden="true">&times;</span>\n' +
//         '                                                            </button>\n' +
//         '\n' +
//         '\n' +
//         '                                                            </a>\n' +
//         '\n' +
//         '                                                    </div>';
//     cartRow.innerHTML = cartRowContents;
//     cartItems.append(cartRow);
//     cartRow.getElementsByClassName('close')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-qty-input')[0].addEventListener('change', quantityChanged)
//     document.getElementById('cartValue').innerHTML=stack.size();
//
//
//
//
//
//
//    }
//
//
//
//
//
//
// function updateCartTotal() {
//
//     let cartItemContainer = document.getElementsByClassName('minicart-items')[0];
//     let cartRows = cartItemContainer.getElementsByClassName('product-item');
//     let total = 0 ;
//     for (let i = 0; i < cartRows.length; i++) {
//         let cartRow = cartRows[i];
//         let priceElement = cartRow.getElementsByClassName('product-item-price')[0];
//         let quantityElement = cartRow.getElementsByClassName('cart-qty-input')[0];
//         let price = parseFloat(priceElement.innerText.replace('$', ''));
//         let quantity = quantityElement.value;
//         total = total + (price * quantity);
//     }
//     total = Math.round(total * 100) / 100;
//     document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs.' + total;
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
