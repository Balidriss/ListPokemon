
function initPokemonsButtons() {
    const gens = [151, 251, 386, 493, 649, 721, 809, 905, 1019];
    const blockButtons = document.querySelector('.pokemons');
    
    for (const gen of gens) {
       const button = document.createElement('button');
       button.classList.add('btn'); 
       button.classList.add('btn-primary');
       button.setAttribute('data-pokemon-gen', gen);
       button.innerText = gen;
       blockButtons.appendChild(button);
    }
    
    const buttons = document.querySelectorAll('[data-pokemon-gen]');
    if (buttons) {
        const pokemonsContainer = document.querySelector('div.row.block-pokemons');    
        for (const button of buttons) {
            button.addEventListener('click', () => {
                const gen = button.getAttribute('data-pokemon-gen');
                pokemonsContainer.innerHTML = '';
                createPokemons(gen, pokemonsContainer);
            });
        }
    }
}

function createPokemons(gen, pokemonsContainer)
{
    for (let i = 1; i <= gen; i++){
        const div = document.createElement('div');
        div.classList.add('col-lg-2');
        div.classList.add('col-md-3');
        div.classList.add('col-sm-12');
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ i +'.png';
        img.setAttribute('src', urlImage);
        div.appendChild(img);
        document.title = gen;
        pokemonsContainer.appendChild(div);
    }
}


window.addEventListener('load', () => {
    initPokemonsButtons();
    createPokemons(151, document.querySelector('div.row.block-pokemons'));
});
