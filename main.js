document.addEventListener("DOMContentLoaded", function () {
    const mermaForm = document.getElementById("merma-form");
    const mermaList = document.getElementById("merma-list");

    mermaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const producto = document.getElementById("producto").value;
        const cantidad = parseFloat(document.getElementById("cantidad").value);

        if (!producto || isNaN(cantidad) || cantidad <= 0) {
            // Mostrar un mensaje de error si no se ingresa una cantidad válida
            alert("Por favor, ingrese una cantidad válida mayor a 0.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = `${producto}: ${cantidad}`;
        mermaList.appendChild(listItem);

        // Aquí puedes enviar los datos al servidor (Node.js/Express) para almacenarlos en una base de datos.

        // Limpia el formulario
        document.getElementById("producto").value = "";
        document.getElementById("cantidad").value = "";
    });
});
