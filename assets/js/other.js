// Seleciona todos os elementos com a classe "item"
const items = document.querySelectorAll('.item');

// Faz uma requisição para o arquivo JSON
fetch('../../data.json')
    .then(response => response.json()) // Transforma a resposta em JSON
    .then(data => {
        // Para cada item, adiciona as informações do JSON correspondentes
        for (let i = 0; i < items.length; i++) {
            // Seleciona as informações do JSON correspondentes ao item atual
            const itemData = data[i];
            // Seleciona o item atual
            const item = items[i];

            // Seleciona o ícone do item e define a imagem correspondente a partir das informações do JSON
            const icon = item.querySelector('.icon');
            icon.setAttribute('src', itemData.icon);

            // Seleciona o label do item e define o texto correspondente a partir das informações do JSON
            const label = item.querySelector('.label');
            label.textContent = itemData.category;

            // Seleciona o número de score do item e define o valor correspondente a partir das informações do JSON
            const score = item.querySelector('.numbers span');
            score.textContent = itemData.score;
        }
    });
