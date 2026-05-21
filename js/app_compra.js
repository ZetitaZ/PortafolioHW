const form = document.getElementById("formCompra");

const resultado = document.getElementById("resultado");

const params = new URLSearchParams(window.location.search);

const curso = params.get("curso");
const precio = params.get("precio");

document.getElementById("curso").value = curso || "";
document.getElementById("precio").value = precio || "";

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const compra = {

        id_compra: Date.now(),

        nombre: form.nombre.value,

        correo: form.correo.value,

        telefono: form.telefono.value,

        curso: form.curso.value,

        precio: form.precio.value,

        metodo_pago: form.metodo_pago.value,

        estado_pago: "Pendiente",

        fecha: new Date().toLocaleString()

    };

    console.log(compra);

    // GUARDAR EN LOCAL STORAGE

    let compras = JSON.parse(
        localStorage.getItem("compras")
    ) || [];

    compras.push(compra);

    localStorage.setItem(
        "compras",
        JSON.stringify(compras)
    );

    resultado.innerHTML = `

        <h2>
            Compra registrada correctamente
        </h2>

        <p>
            ID de Compra:
            ${compra.id_compra}
        </p>

    `;

    form.reset();

});