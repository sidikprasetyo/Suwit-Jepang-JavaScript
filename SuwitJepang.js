let skorKomputer = 0;
let skorPlayer = 0;

function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "kertas";
  return "gunting";
}

function getHasil(comp, player) {
  if (player == comp) return "Seri";
  if (player == "batu") return comp == "kertas" ? "Kalah" : "Menang";
  if (player == "kertas") return comp == "batu" ? "Menang" : "Kalah";
  if (player == "gunting") return comp == "kertas" ? "Menang" : "Kalah";
}

function skor(hasil) {
  const skorInfo = document.querySelector(".skor");
  const hasilSkorKomputer = skorInfo.querySelector(".nilai1");
  const hasilSkorPlayer = skorInfo.querySelector(".nilai2");

  if (hasil == "Menang") {
    skorPlayer++;
  } else if (hasil == "Kalah") {
    skorKomputer++;
  }

  hasilSkorKomputer.innerHTML = skorKomputer;
  hasilSkorPlayer.innerHTML = skorPlayer;
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "kertas", "gunting"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pilih) {
  pilih.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pilih.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      skor(hasil);
    }, 1000);
  });
});

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
