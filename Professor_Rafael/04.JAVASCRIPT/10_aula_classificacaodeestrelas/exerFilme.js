const ratings = {
    TASM: 6.6,
    Coringa: 8.4,
    EndGame: 8.4,
    Django: 8.5,
    SM1: 6.30,
    SAW1: 8.6,
    Batman: 9.0,
    SMAtS: 8.6,
    Rocky: 8.1,
    VF: 3.4,
    };
    // Total de estrelas
    const starsTotal = 10;
    // Produto
    let product;
    // Elementos do formulário
    const productSelect = document.getElementById('product-select');
    const ratingControl = document.getElementById('rating-control');

    // Executa o método getRatings quando o DOM carregado no navegador
document.addEventListener('DOMContentLoaded', getRatings);
// Evento change para selecionar um produto
productSelect.addEventListener('change', (e) => {
product = e.target.value;
// Habilita do controle de classificação
ratingControl.disabled = false;
ratingControl.value = ratings[product];
});

// Evento blur, quando o elemento perde o foco
ratingControl.addEventListener('blur', (e) => {
const rating = e.target.value;
// Garante o valor máximo da classificação 5 estrelas
if (rating > 10) {
alert('Por favor, classififique entre 1 - 5');
return;
}
// Alteração da classidficação
ratings[product] = rating; getRatings();
});

// Busca classificação
function getRatings() {
    for (let rating in ratings) {
    // console.log(ratings[rating]);
    // Transforma a classificação em porcentagem
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    // console.log(starPercentage);
    // Arredonda o resultado para valores inteiros
    const starPercentageRounded = `${
    Math.round(starPercentage / 10) * 10}%`;
    // console.log(starPercentageRounded);
    // Define a largura da do preenchimento de acordo com a porcentagem

    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
    // Adiciona o valor da classificação para ser exibido na tela
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
    }