const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("proyectos.json")
  .then(res => res.json())
  .then(data => {
    const proyecto = data.find(p => p.id == id);

    const contenedor = document.getElementById("detalle");

    if (!proyecto) {
      contenedor.innerHTML = "<h2>Proyecto no encontrado</h2>";
      return;
    }

    let galeriaHTML = "";

    if (proyecto.galeria) {
      proyecto.galeria.forEach(img => {
        galeriaHTML += `<img src="${img}" />`;
      });
    }

    contenedor.innerHTML = `
      <h1>${proyecto.titulo}</h1>
      <p>${proyecto.descripcion}</p>
      <img src="${proyecto.imagen}" />

      <div class="galeria">
        ${galeriaHTML}
      </div>
    `;
  })
  .catch(error => {
    console.error(error);
  });