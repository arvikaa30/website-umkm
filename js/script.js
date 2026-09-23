// ---------- Tombol promo (beranda) ----------
const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoButton.textContent = "Promo: Beli 2 gratis tester!";
    console.log("Promo Ngopa Ngopi berhasil ditampilkan.");
  });
}

