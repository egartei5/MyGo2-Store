function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}
// Show cart items on cart.html
document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cartContainer && cartTotal) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = "";
      return;
    }

    let total = 0;
    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `<h3>${item.name}</h3><p>$${item.price.toFixed(2)}</p>`;
      cartContainer.appendChild(div);
      total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
});

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
