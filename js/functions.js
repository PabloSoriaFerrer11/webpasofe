function enviarCorreoBeta() {
    const correo = "pablocvpcruz@gmail.com";
    const asunto = encodeURIComponent("Acceso Beta Airsoft Matchmaking");
    const cuerpo = encodeURIComponent("Hola, quiero probar la beta.");
    window.location.href = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`;
};

// Función para alternar el tema oscuro/claro
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleBtn = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");

        document.querySelector('header').classList.add("dark");
        document.querySelector('main').classList.add("dark");
        document.querySelector('footer').classList.add("dark");

        toggleBtn.textContent = "☀️ Claro";
    }else{
        toggleBtn.textContent = "🌙 Oscuro";
    }




    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        document.querySelector('header').classList.toggle("dark");
        document.querySelector('main').classList.toggle("dark");
        document.querySelector('footer').classList.toggle("dark");

        if (body.classList.contains("dark")) {
            toggleBtn.textContent = "☀️ Claro";
        } else {
            toggleBtn.textContent = "🌙 Oscuro";
        }

        const theme = body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});
