// Seletores
const form = document.querySelector('#post-form');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

// Evento de submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Montar o objeto data
    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };
    
    // Fetch POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Renderizar o post enviado
        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o post.');
    });
});