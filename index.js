const projectsContainer = document.getElementById("projects");

const projects = [
    { name: "Classes", description: "Contagem regressiva criada a partir de classes do Javascript", path: "classes" },
    { name: "Jquery", description: "Um dos primeiros projetos para visualizar o preço das criptomoedas Bitcoin e Chiliz", path: "cripto" },
    { name: "Fetch", description: "Utilização da Fetch API para requisições HTTP", path: "fetch" },
    { name: "History", description: "Utilização da History e Fetch API para requisições de Páginas", path: "fetch-pages" },
    { name: "Form Validation", description: "Validação simples e nativa de formulário", path: "form" },
    { name: "Modal", description: "Modal utilizando Javascript Puro", path: "modal-js" },
    { name: "Modules", description: "Testes utilizando módulos do Javascript", path: "module-js" },
]

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4"); // Responsivo: 12 colunas no mobile, 6 no md, 4 no lg
    projectElement.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${project.name}</h2>
                <p class="card-text">${project.description}</p>
                <a href="${project.path}" class="btn btn-primary">Ver projeto</a>
            </div>
        </div>
    `;

    projectsContainer.appendChild(projectElement);
});