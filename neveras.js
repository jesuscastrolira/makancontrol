document.addEventListener("DOMContentLoaded", function () {
    const neveraForm = document.getElementById("nevera-form");
    const registroList = document.getElementById("registro-list");

    neveraForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nevera = document.getElementById("nevera").value;
        const temperatura = document.getElementById("temperatura").value;
        const momento = document.getElementById("momento").value;

        // Crea una nueva fila en la tabla con los datos ingresados
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${nevera}</td><td>${temperatura}</td><td>${momento}</td>`;
        registroList.appendChild(newRow);

        // Limpia el formulario
        neveraForm.reset();
    });
});
