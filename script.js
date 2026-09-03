const sorular = [
    {
        soru: "Merve'nin doğum günü ne zaman? 🎂",
        cevaplar: [
            "14 Şubat",
            "27 Aralık",
            "5 Mayıs",
            "19 Eylül"
        ],
        dogru: 1
    },

    {
        soru: "Merve'nin en sevdiği renk hangisi? ❤️",
        cevaplar: [
            "Mavi",
            "Pembe",
            "Kırmızı",
            "Mor"
        ],
        dogru: 2
    },

    {
        soru: "Merve hangi yemekleri sever? 🍝",
        cevaplar: [
            "Mantı ve makarna",
            "Sadece pizza",
            "Hamburger ve patates",
            "Balık ve salata"
        ],
        dogru: 0
    },

    {
        soru: "Merve'nin sevdiği hayvanlardan biri hangisi? 🐶",
        cevaplar: [
            "Kedi",
            "Köpek",
            "Tavşan",
            "At"
        ],
        dogru: 1
    },

    {
        soru: "Merve başka hangi hayvanı sever? 🐦",
        cevaplar: [
            "Yılan",
            "Timsah",
            "Muhabbet kuşu",
            "Örümcek"
        ],
        dogru: 2
    },

    {
        soru: "Merve'nin sevdiği aktivitelerden biri hangisi? 🏊‍♀️",
        cevaplar: [
            "Yüzmek",
            "Futbol oynamak",
            "Kayak yapmak",
            "Resim yapmak"
        ],
        dogru: 0
    },

    {
        soru: "Merve müzik dinlerken ne yapmayı sever? 🎧",
        cevaplar: [
            "Uyumayı",
            "Şarkı ile yürümeyi",
            "Ders çalışmayı",
            "Film izlemeyi"
        ],
        dogru: 1
    },

    {
        soru: "Merve'nin en sevdiği sanatçılar kimlerdir? 🎤",
        cevaplar: [
            "Motive ve UZI",
            "Tarkan ve Sezen Aksu",
            "Mabel Matiz ve Derya Uluğ",
            "Edis ve Hadise"
        ],
        dogru: 0
    },

    {
        soru: "Merve'nin sevdiği şarkılardan biri hangisidir? 🎵",
        cevaplar: [
            "Romantik",
            "Deli Gibi",
            "Yalnızlık",
            "Sonbahar"
        ],
        dogru: 0
    },

    {
        soru: "Merve'nin sevdiği diğer şarkı hangisidir? 🎶",
        cevaplar: [
            "BRAPAP",
            "Fırtına",
            "Geceler",
            "Aşk"
        ],
        dogru: 0
    },

    {
        soru: "Merve'nin en sevdiği tatlı hangisidir? 🍰",
        cevaplar: [
            "Sütlaç",
            "Cheesecake",
            "Yeşil baklava",
            "Profiterol"
        ],
        dogru: 2
    },

    {
        soru: "Merve'nin en sevdiği içecek hangisidir? 🥤",
        cevaplar: [
            "Kola",
            "Ice Tea",
            "Limonata",
            "Meyve suyu"
        ],
        dogru: 1
    },

    {
        soru: "Merve denizi mi yoksa havuzu mu sever? 🌊",
        cevaplar: [
            "Sadece denizi",
            "Sadece havuzu",
            "İkisini de",
            "Hiçbirini"
        ],
        dogru: 2
    },

    {
        soru: "Merve'nin en sevdiği dersler hangileridir? 💻",
        cevaplar: [
            "Matematik ve fizik",
            "Türkçe ve tarih",
            "Bilgisayar programlama ve grafik tasarım",
            "Biyoloji ve kimya"
        ],
        dogru: 2
    },

    {
        soru: "Merve'nin en sevdiği oyun hangisidir? 🎮",
        cevaplar: [
            "Minecraft",
            "Roblox",
            "Free Fire",
            "PUBG"
        ],
        dogru: 2
    },

    {
        soru: "Merve'nin en sevdiği dizi hangisidir? 📺",
        cevaplar: [
            "Wednesday",
            "Seviyor Sevmiyor",
            "Friends",
            "Stranger Things"
        ],
        dogru: 1
    },

    {
        soru: "Merve'nin en sevdiği çiçek hangisidir? 🌹",
        cevaplar: [
            "Lale",
            "Papatya",
            "Gül",
            "Orkide"
        ],
        dogru: 2
    },

    {
        soru: "Merve en çok hangi uygulamayı kullanır? 📱",
        cevaplar: [
            "TikTok",
            "Instagram",
            "YouTube",
            "Pinterest"
        ],
        dogru: 1
    },

    {
        soru: "Merve'nin gitmek istediği ülkeler hangileridir? ✈️",
        cevaplar: [
            "İtalya ve İspanya",
            "Fransa ve Kore",
            "İngiltere ve Almanya",
            "Amerika ve Kanada"
        ],
        dogru: 1
    },

    {
        soru: "Merve insanlarda hangi özellikleri önemser? 💕",
        cevaplar: [
            "Samimiyet, gerçekçilik ve açık sözlülük",
            "Sadece dış görünüş",
            "Sessiz ve içine kapanık olmak",
            "Her şeye evet demek"
        ],
        dogru: 0
    }
];


let mevcutSoru = 0;
let puan = 0;
let oyuncuAdi = "";
let cevapVerildi = false;


// TESTİ BAŞLAT
function testeBasla() {

    oyuncuAdi = document.getElementById("isim").value.trim();

    if (oyuncuAdi === "") {
        alert("Önce adını yazmalısın ❤️");
        return;
    }

    document.getElementById("baslaBtn").style.display = "none";
    document.getElementById("isim").style.display = "none";

    document.getElementById("quiz").classList.remove("gizli");

    soruyuGoster();
}


// SORUYU GÖSTER
function soruyuGoster() {

    cevapVerildi = false;

    const soru = sorular[mevcutSoru];

    document.getElementById("soru").textContent =
        (mevcutSoru + 1) + ". " + soru.soru;

    const cevaplar = document.getElementById("cevaplar");

    cevaplar.innerHTML = "";

    soru.cevaplar.forEach((cevap, index) => {

        const buton = document.createElement("button");

        buton.textContent = cevap;

        buton.classList.add("cevap");

        buton.onclick = function () {
            cevapKontrol(index, buton);
        };

        cevaplar.appendChild(buton);
    });

    document.getElementById("sonrakiBtn").style.display = "none";
}


// CEVABI KONTROL ET
function cevapKontrol(secim, secilenButon) {

    if (cevapVerildi) {
        return;
    }

    cevapVerildi = true;

    const dogruCevap = sorular[mevcutSoru].dogru;

    const butonlar = document.querySelectorAll(".cevap");

    butonlar.forEach((buton, index) => {

        buton.disabled = true;

        if (index === dogruCevap) {
            buton.style.backgroundColor = "#2ecc71";
            buton.style.color = "white";
        }
    });


    if (secim === dogruCevap) {

        puan++;

        secilenButon.style.backgroundColor = "#2ecc71";

    } else {

        secilenButon.style.backgroundColor = "#e74c3c";

        alert("Yanlış cevap 😅");
    }


    document.getElementById("sonrakiBtn").style.display = "inline-block";
}


// SONRAKİ SORU
function sonrakiSoru() {

    mevcutSoru++;

    if (mevcutSoru < sorular.length) {

        soruyuGoster();

    } else {

        testiBitir();
    }
}


// TESTİ BİTİR
function testiBitir() {

    document.getElementById("quiz").classList.add("gizli");

    document.getElementById("sonuc").classList.remove("gizli");

    const yuzde = Math.round(
        (puan / sorular.length) * 100
    );


    document.getElementById("puan").textContent =
        oyuncuAdi + ", " + puan + "/" + sorular.length +
        " doğru yaptın! (" + yuzde + "%)";


    let mesaj = "";


    if (yuzde <= 20) {

        mesaj =
            "Merve hakkında neredeyse hiçbir şey bilmiyorsun 😂";

    } else if (yuzde <= 40) {

        mesaj =
            "Merve'yi biraz daha tanıman gerekiyor 😅";

    } else if (yuzde <= 60) {

        mesaj =
            "Fena değilsin! Merve hakkında bazı şeyleri biliyorsun 👀";

    } else if (yuzde <= 80) {

        mesaj =
            "Merve'yi oldukça iyi tanıyorsun! 💕";

    } else if (yuzde < 100) {

        mesaj =
            "Vay be! Merve'yi gerçekten çok iyi tanıyorsun! 😍";

    } else {

        mesaj =
            "MERVE'NİN AKLINI OKUYORSUN! 👑❤️ 100/100!";
    }


    document.getElementById("mesaj").textContent = mesaj;
}


// TEKRAR OYNA
function sayfayiYenile() {

    location.reload();

}
    

 
