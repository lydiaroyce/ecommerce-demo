let cartItems = [];

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.innerText = cartItems.length;
}

// Function to display cart items
function displayCartItems() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    cartDropdown.innerHTML = ''; // Clear previous items
    cartItems.forEach(item => {
        cartDropdown.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - ${item.price}</span>
                <button class="remove-item">Remove</button>
            </div>
        `;
    });
}

// Event listener for each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.previousElementSibling.innerText;
        const productPrice = this.previousElementSibling.innerText;
        cartItems.push({ name: productName, price: productPrice });
        updateCartCount();
        displayCartItems(); // Directly call this here instead of adding another event listener
    });
});

// Event listener for removing items from the cart
document.querySelector('.cart-dropdown').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemName = event.target.previousElementSibling.innerText.split(' - ')[0];
        cartItems = cartItems.filter(item => item.name !== itemName);
        updateCartCount();
        displayCartItems();
    }
});
