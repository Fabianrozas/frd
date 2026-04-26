fetch('proyectos.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('proyectos');

    data.items.forEach(p => {
      contenedor.innerHTML += `
  <a href="proyecto.html?id=${p.id}" class="card">
    <div class="card-img-wrapper">
      <img src="${p.imagen}" alt="${p.titulo}" />
      <div class="card-overlay">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
      </div>
    </div>
  </a>
`;
    });
  });
