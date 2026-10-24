// ---------- Tombol promo (beranda) ----------
const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoButton.textContent = "Promo: Beli 2 gratis tester!";
    console.log("Promo Ngopa Ngopi berhasil ditampilkan.");
  });
}


// ---------- Menu hamburger (navigasi mobile) ----------
// Class "js" menandai bahwa JavaScript aktif, sehingga CSS baru menyembunyikan
// menu di layar sempit. Tanpa JavaScript, menu tetap tampil dan tidak ada tombol.
document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#menu-navigasi");
const desktopQuery = window.matchMedia("(min-width: 60rem)");

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute(
    "aria-label",
    open ? "Tutup menu navigasi" : "Buka menu navigasi"
  );
}

if (navToggle && navMenu) {
  // Tombol hamburger: buka/tutup menu
  navToggle.addEventListener("click", () => {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });

  // Menu tertutup setelah salah satu tautan dipilih (berguna untuk tautan #anchor)
  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  // Escape menutup menu dan mengembalikan fokus ke tombol
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      navToggle.focus();
    }
  });

  // Klik di luar navigasi menutup menu
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) setMenu(false);
  });

  // Saat layar melebar ke desktop, reset keadaan menu
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}