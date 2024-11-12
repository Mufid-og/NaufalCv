const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
    // Cek apakah dropdown menu saat ini ditampilkan
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Sembunyikan dropdown
    } else {
        dropdownMenu.style.display = "block"; // Tampilkan dropdown
    }
});

// Menutup dropdown jika klik di luar
window.addEventListener('click', (event) => {
    if (!event.target.closest('#dropdownButton') && window.matchMedia("(min-width: 450px)").matches) {
        dropdownMenu.style.display = "block"; // Sembunyikan dropdown
    }else if(!event.target.closest('#dropdownButton')){
        dropdownMenu.style.display = "none";
    }
});

