
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".checkout-form");
    const subtotal = localStorage.getItem("cart-subtotal") || 96;
    const total = parseFloat(subtotal) + 5;
  
    document.getElementById("summary-subtotal").textContent = subtotal;
    document.getElementById("summary-total").textContent = total;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Order placed successfully. Redirecting...");
      window.location.href = "thankyou.html"; // mock thank you page
    });
  });
  