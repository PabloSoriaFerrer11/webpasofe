function enviarCorreoBeta() {
    const correo = "pablocvpcruz@gmail.com";
    const asunto = encodeURIComponent("Acceso Beta Airsoft Matchmaking");
    const cuerpo = encodeURIComponent("Hola, quiero probar la beta.");
    window.location.href = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`;
};
