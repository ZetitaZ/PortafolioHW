// Mostrar/Ocultar el botón al hacer scroll
const btnSubir = document.getElementById("btn-subir");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnSubir.classList.add("visible");
    } else {
        btnSubir.classList.remove("visible");
    }
});

// Desplazamiento suave al inicio
btnSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});