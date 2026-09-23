const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

const paketLabels = {
  rumahan: "Paket rumahan",
  kantor: "Paket kantor",
  reseller: "Paket reseller",
  reservasi: "Reservasi tempat/acara",
};

const topikLabels = {
  produk: "Informasi produk",
  pesanan: "Status pesanan",
  "kerja-sama": "Kerja sama",
  "kritik-saran": "Kritik & saran",
};

const waktuLabels = {
  pagi: "Pagi (08.00–11.00)",
  siang: "Siang (11.00–15.00)",
  sore: "Sore (15.00–18.00)",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const paket = paketLabels[data.get("paket")] ?? "-";
  const topik = topikLabels[data.get("topik")] ?? "-";
  const waktu = waktuLabels[data.get("waktu")] ?? "-";
  const whatsapp = data.get("whatsapp")?.trim() || "-";
  const pesan = data.get("pesan")?.trim() || "-";

  preview.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `WhatsApp: ${whatsapp}`,
    `Paket: ${paket}`,
    `Topik: ${topik}`,
    `Waktu kontak: ${waktu}`,
    `Pesan: ${pesan}`,
  ].join("\n");

  form.reset();
});