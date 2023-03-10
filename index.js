
$(document).ready(function () {
    let swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// proyecto carrito de compras  INDEX HTML

function add(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = { price: price, quantity: 1 };
    }
}
document.querySelectorAll('.button-add').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('p').textContent;
        const price = button.parentElement.querySelector('p:last-child').textContent;
        add(productName, price);
    });
});
function showCart() {
    const cartContainer = document.querySelector('#cart-container');
    cartContainer.innerHTML = '';
    let total = 0;
    for (let product in cart) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');

    const name = document.createElement('span');
    name.textContent = product;
    itemContainer.appendChild(name);

    const quantity = document.createElement('span');
    quantity.textContent = cart[product].quantity;
    itemContainer.appendChild(quantity);

    const price = document.createElement('span');
    price.textContent = cart[product].price;
    itemContainer.appendChild(price);

    cartContainer.appendChild(itemContainer);

      total += cart[product].price * cart[product].quantity;
    }

    const totalContainer = document.createElement('div');
    totalContainer.classList.add('cart-total');
    totalContainer.textContent = `Total: ${total}`;
    cartContainer.appendChild(totalContainer);
}
const showCartButton = document.querySelector('#show-cart-button');
showCartButton.addEventListener('click', showCart);