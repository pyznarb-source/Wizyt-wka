// Czekamy na pełne załadowanie struktury DOM
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. INICJACJA EFEKTU 3D TILT (VanillaTilt)
       ========================================================================== */
    // Sprawdzamy, czy biblioteka VanillaTilt została poprawnie załadowana z pliku HTML
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,            // Maksymalny kąt przechylenia (w stopniach)
            speed: 400,         // Prędkość wejścia/wyjścia z efektu
            glare: true,        // Włączenie efektu błysku/odbicia światła
            "max-glare": 0.15,  // Maksymalna intensywność błysku
            gyroscope: true     // Wsparcie dla żyroskopu na urządzeniach mobilnych
        });
    }

    /* ==========================================================================
       2. ANIMACJE POJAWIANIA SIĘ (ScrollReveal)
       ========================================================================== */
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',   // Kierunek, z którego wyłaniają się elementy
            distance: '50px',   // Dystans przesunięcia
            duration: 1000,     // Czas trwania animacji w milisekundach
            delay: 200,         // Opóźnienie startu animacji
            reset: false        // Wyłączone ponowne animowanie przy przewijaniu w górę
        });

        // Konfiguracja wyłaniania się dla poszczególnych komponentów
        sr.reveal('.profile-card', { origin: 'left', delay: 100 });
        sr.reveal('.content-section', { interval: 150 });
        sr.reveal('.skill-card', { interval: 100 });
        sr.reveal('.project-card', { interval: 100 });
        sr.reveal('.timeline-item', { interval: 150 });
    }

    /* ==========================================================================
       3. OBSŁUGA FORMULARZA KONTAKTOWEGO
       ========================================================================== */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Zatrzymujemy domyślne przeładowanie strony

            // Pobranie wpisanych wartości
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Wyświetlenie modernistycznego powiadomienia (możesz podpiąć tu prawdziwy serwer np. EmailJS)
            alert(`Dziękuję za wiadomość, ${name}! Twój formularz został pomyślnie wysłany (symulacja).`);

            // Czyszczenie formularza po wysłaniu
            contactForm.reset();
        });
    }
});
/* ==========================================================================
      4. LOGIKA PASKA POSTĘPU PRZEWIJANIA
      ========================================================================== */
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    // Całkowita wysokość dokumentu pomniejszona o wysokość okna przeglądarki
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Aktualna pozycja przewinięcia od góry
    const scrolled = window.scrollY;

    if (totalHeight > 0) {
        // Obliczanie procentu przewinięcia strony
        const progressPercentage = (scrolled / totalHeight) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }
});