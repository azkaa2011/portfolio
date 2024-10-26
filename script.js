window.onload = function () {
    window.scrollTo(0, 0);
};
// Mendapatkan semua elemen di halaman
var semuaElemen = document.getElementsByTagName("*");

// Loop melalui semua elemen dan tambahkan atribut translate="no"
for (var i = 0; i < semuaElemen.length; i++) {
    semuaElemen[i].setAttribute("translate", "no");
}
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing");
    const words = ["y Name Is", "uhammad Azka Arrodhi"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 800); // Delay sebelum menghapus
                return;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100); // Kecepatan saat mengetik dan menghapus
    }

    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const profileSection = document.getElementById('profile-pic');
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-side, .fade-in-up, .fade-in-down, .fade-in-diagonal, .fade-in-bottom, .fade-in-rotate, .fade-in-scale, .fade-in-shake, .fade-in-shake3 .fade-in-bounce, .fade-in-right, .fade-in-zoom, .fade-in-slide, .fade-in-top, .fade-in-color');
    let profileSeen = false; // Flag untuk menandai apakah profil sudah terlihat

    // Fungsi untuk menjalankan animasi scroll
    function runScrollAnimation() {
        const windowHeight = window.innerHeight;

        // Deteksi apakah profil sudah terlihat sepenuhnya
        const profileTop = profileSection.getBoundingClientRect().top;
        const profileBottom = profileSection.getBoundingClientRect().bottom;

        if (profileTop < windowHeight && profileBottom > 0) {
            profileSeen = true; // Tandai bahwa profil sudah terlihat
        }

        // Jika scroll sudah mencapai bagian atas
        if (window.scrollY === 0) {
            fadeInElements.forEach(el => {
                el.classList.remove('visible'); // Hilangkan kelas visible
                el.classList.add('closing'); // Tambahkan animasi penutup
            });
        } else {
            // Jika profil sudah terlihat dan scroll tidak berada di bagian atas
            if (profileSeen) {
                fadeInElements.forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;
                    const elementBottom = el.getBoundingClientRect().bottom;

                    // Muncul ketika elemen terlihat di viewport
                    if (elementTop < windowHeight && elementBottom > 0) {
                        el.classList.add('visible');
                        el.classList.remove('closing'); // Hilangkan animasi penutup
                    }
                });
            }
        }
    }

    // Event listener untuk scroll
    window.addEventListener('scroll', runScrollAnimation);
    runScrollAnimation(); // Panggil fungsi saat halaman dimuat
});