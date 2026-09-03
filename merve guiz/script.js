const sorular = [
    {
        soru: "Merve'nin en sevdiği renk hangisidir? ❤️",
        cevaplar: ["Pembe 💗", "Kırmızı ❤️", "Mavi 💙", "Mor 💜"],
        dogruCevap: 1
    },

    {
        soru: "Merve hangi yemekleri sever? 🍝",
        cevaplar: [
            "Pizza 🍕",
            "Mantı ve makarna 🥟🍝",
            "Hamburger 🍔",
            "Sadece salata 🥗"
        ],
        dogruCevap: 1
    },

    {
        soru: "Merve'nin en sevdiği hayvanlardan biri hangisidir? 🐶",
        cevaplar: [
            "Kedi 🐱",
            "Tavşan 🐰",
            "Köpek 🐶",
            "At 🐴"
        ],
        dogruCevap: 2
    },

    {
        soru: "Merve hangi hayvanı da çok sever? 🐦",
        cevaplar: [
            "Muhabbet kuşu 🐦",
            "Yılan 🐍",
            "Kaplumbağa 🐢",
            "Balık 🐠"
        ],
        dogruCevap: 0
    },

    {
        soru: "Merve'nin en sevdiği aktivitelerden biri hangisidir? 🏊‍♀️",
        cevaplar: [
            "Futbol oynamak ⚽",
            "Yüzmek 🏊‍♀️",
            "Resim yapmak 🎨",
            "Bisiklete binmek 🚲"
        ],
        dogruCevap: 1
    },

    {
        soru: "Merve müzik dinlerken ne yapmayı sever? 🎵",
        cevaplar: [
            "Şarkı ile yürümek 🎧🚶‍♀️",
            "Uyumak 😴",
            "Ders çalışmak 📚",
            "Televizyon izlemek 📺"
        ],
        dogruCevap: 0
    },

    {
        soru: "Merve'nin en sevdiği hayvanlar hangileridir? 🥰",
        cevaplar: [
            "Kedi ve tavşan 🐱🐰",
            "Köpek ve muhabbet kuşu 🐶🐦",
            "At ve balık 🐴🐠",
            "Hamster ve kedi 🐹🐱"
        ],
        dogruCevap: 1
    },

    {
        soru: "Merve'nin en sevdiği aktiviteler hangileridir? 💕",
        cevaplar: [
            "Yüzmek ve şarkı ile yürümek 🏊‍♀️🎵",
            "Futbol ve basketbol ⚽🏀",
            "Kitap okumak ve resim yapmak 📚🎨",
            "Oyun oynamak ve film izlemek 🎮🎬"
        ],
        dogruCevap: 0
    }
];


let mevcutSoru = 0;
let puan = 0;

function testeBasla() {

    oyuncuAdi = document.getElementById("isim").value.trim();

    if (oyuncuAdi === "") {
        alert("Lütfen önce adını yaz ❤️");
        return;
    }

    document.getElementById("baslaBtn").style.display = "none";

    document.getElementById("isim").style.display = "none";

    document.getElementById("quiz").classList.remove("gizli");

    soruyuGoster();
}





function soruyuGoster() {

    const soru = sorular[mevcutSoru];

    document.getElementById("soru").textContent = soru.soru;

    const cevaplar = document.getElementById("cevaplar");

    cevaplar.innerHTML = "";

    soru.cevaplar.forEach((cevap, index) => {

        const buton = document.createElement("button");

        buton.textContent = cevap;

        buton.classList.add("cevap");

        buton.onclick = function () {
            cevapKontrol(index);
        };

        cevaplar.appendChild(buton);
    });
}


function cevapKontrol(secim) {

    const dogru = sorular[mevcutSoru].dogruCevap;

    if (secim === dogru) {

        puan += 100 / sorular.length;

        alert("Doğru cevap! ❤️");

    } else {

        alert("Yanlış cevap! 😅");
    }
}


function sonrakiSoru() {

    mevcutSoru++;

    if (mevcutSoru < sorular.length) {

        soruyuGoster();

    } else {

        testiBitir();
    }
}


function testiBitir() {

    document.getElementById("quiz").classList.add("gizli");

    document.getElementById("sonuc").classList.remove("gizli");

    const finalPuan = Math.round(puan);

    document.getElementById("puan").textContent =
        "Puanın: " + finalPuan + " / 100";


    let mesaj = "";


    if (finalPuan <= 20) {

        mesaj = "Merve'yi tanımaya daha yeni başlamışsın 😂";

    } else if (finalPuan <= 40) {

        mesaj = "Biraz daha Merve çalışması yapmalısın 😅";

    } else if (finalPuan <= 60) {

        mesaj = "Fena değilsin! 👀";

    } else if (finalPuan <= 80) {

        mesaj = "Merve'yi bayağı iyi tanıyorsun! 💕";

    } else {

        mesaj = "Vay be! Merve'yi gerçekten çok iyi tanıyorsun! 👑❤️";
    }


    document.getElementById("mesaj").textContent = mesaj;
}


function sayfayiYenile() {

    location.reload();

}