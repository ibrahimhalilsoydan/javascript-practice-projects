// --- 1. SEÇİCİLER (HTML'den elementleri bulma) ---
const secondElement = document.querySelector('#second'); // ID ile seçtik
const splitElement = document.querySelector('#split');   // ID ile seçtik

// Butonların class'ı olduğu için nokta (.) ile seçiyoruz
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

// --- 2. DEĞİŞKENLER ---
let seconds = 0;
let tens = 0; // "split" dediğin kısım (salise)
let interval; // Zamanlayıcıyı tutacak değişken

// --- 3. OLAY DİNLEYİCİLERİ (Butonlara emir verme) ---

// Başlat Butonu
btnStart.addEventListener('click', () => {
    clearInterval(interval); // Hata önlemi: Zaten çalışıyorsa önce durdur
    interval = setInterval(startTimer, 10); // Her 10ms'de bir startTimer'ı çalıştır
});

// Durdur Butonu
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

// Sıfırla Butonu
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    // Ekranı güncelle
    secondElement.innerHTML = "00";
    splitElement.innerHTML = "00";
});

// --- 4. ZAMANLAYICI MANTIĞI ---
function startTimer() {
    tens++; // Saliseyi artır

    // --- Salise (Split) Kısmı ---
    if (tens <= 9) {
        splitElement.innerHTML = "0" + tens;
    } else {
        splitElement.innerHTML = tens;
    }

    // --- Saniye Kısmı ---
    if (tens > 99) {
        seconds++;
        tens = 0; // Saliseyi sıfırla
        splitElement.innerHTML = "00";
        
        // Saniyeyi ekrana yaz (0 ekleme kontrolü ile)
        if (seconds <= 9) {
            secondElement.innerHTML = "0" + seconds;
        } else {
            secondElement.innerHTML = seconds;
        }
    }
}