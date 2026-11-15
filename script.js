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