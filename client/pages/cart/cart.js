// cart.js

document.addEventListener("DOMContentLoaded", () => {
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const removeButtons = document.querySelectorAll(".remove-btn");
  
    function updateCartTotal() {
      let subtotal = 0;
      const cartItems = document.querySelectorAll(".cart-item");
  
      cartItems.forEach((item) => {
        const priceText = item.querySelector(".item-details p:nth-of-type(2)").textContent;
        const price = parseFloat(priceText.replace("Price: $", ""));
        const quantity = parseInt(item.querySelector(".quantity-input").value);
  
        subtotal += price * quantity;
      });
  
      subtotalElement.textContent = `$${subtotal}`;
      totalElement.textContent = `$${subtotal + 5}`; // flat $5 shipping
    }
  
    quantityInputs.forEach((input) => {
      input.addEventListener("input", updateCartTotal);
    });
  
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const item = e.target.closest(".cart-item");
        item.remove();
        updateCartTotal();
      });
    });
  
    updateCartTotal();
  });