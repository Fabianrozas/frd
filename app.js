fetch('proyectos.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('proyectos');

    data.forEach(p => {
  contenedor.innerHTML += `
  <a href="proyecto.html?id=${p.id}" class="card">
    <img src="${p.imagen}" alt="${p.titulo}" />
    <h3>${p.titulo}</h3>
    
  </a>
`;
    });
  });

  
  

  

  
