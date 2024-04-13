document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartContainer = document.querySelector('.cart-grid');
    // console.log(addToCartButtons);
    console.log(cartContainer);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('.productName').textContent;
            const productImageSrc = productCard.querySelector('img').getAttribute('src');
            const productPrice = productCard.querySelector('.price').textContent;

            // console.log(productCard);
            // console.log(productName);
            // console.log(productImageSrc);
            // console.log(productPrice);

            // Create a new product element for the cart
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('product-card');
            cartProduct.innerHTML = `
                <img src="${productImageSrc}" alt="">
                <h3 class="productName">${productName}</h3>
                <div class="part2">
                <span class="price">${productPrice}</span>
                    <button>Add to Cart</button>
                    <button class="remove">Remove</button>
                </div>
            `;

            // Add event listener to remove button
            const removeButton = cartProduct.querySelector('.remove');
            removeButton.addEventListener('click', function (event) {
                cartProduct.remove();
            });

            // Append the new product to the cart
            cartContainer.appendChild(cartProduct);
        });
    });
});

