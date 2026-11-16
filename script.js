
// =========================
// DARK MODE
// =========================

const tombolTema = document.getElementById("theme-toggle");

if (tombolTema) {

    tombolTema.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            tombolTema.textContent = "☀️ Light Mode";
        } else {
            tombolTema.textContent = "🌙 Dark Mode";
        }

    });

}


// =========================
// MOBILE NAVIGATION
// =========================

const tombolMenu = document.getElementById("menu-toggle");
const menuNavigasi = document.getElementById("nav-links");

if (tombolMenu && menuNavigasi) {

    tombolMenu.addEventListener("click", function () {
        menuNavigasi.classList.toggle("active");
    });

    const semuaLink = menuNavigasi.querySelectorAll("a");

    semuaLink.forEach(function (link) {

        link.addEventListener("click", function () {
            menuNavigasi.classList.remove("active");
        });

    });

}
