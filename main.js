//!! index of forms
const pokemonform = 0;

//!!

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

function createPokemons(gen, pokemonsContainer) {
    for (let i = 1; i <= gen; i++) {
        const div = document.createElement('div');
        div.classList.add('col-lg-2');
        div.classList.add('col-md-3');
        div.classList.add('col-sm-12');
        div.classList.add('pok-' + i)
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + i + '.png';
        img.setAttribute('src', urlImage);
        div.appendChild(img);
        document.title = gen;
        pokemonsContainer.appendChild(div);
    }
}

function getToPokemon(number) {
    const pokemonsContainer = document.querySelector('div.row.block-pokemons');

    pokemonsContainer.querySelector('div.col-lg-2.col-md-3.col-sm-12.pok-' + number).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    console.log(pokemonsContainer.querySelector('div.col-lg-2.col-md-3.col-sm-12.pok-' + number));
}

function formPokemon() {
    const form = document.forms[pokemonform];
    if (form) {
        form.addEventListener('submit', ($e) => {
            $e.preventDefault();

            const pkmn = form['pkmn'];
            if (pkmn) {
                let check = checkInput(pkmn);
                if (check && pkmn.value > 0) {
                    const pokemonsContainer = document.querySelector('div.row.block-pokemons');
                    pokemonsContainer.innerHTML = '';
                    const div = document.createElement('div');
                    div.classList.add('col-3');
                    const img = document.createElement('img');
                    img.classList.add('img-fluid');
                    const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + pkmn.value + '.png';
                    img.setAttribute('src', urlImage);
                    div.appendChild(img);
                    pokemonsContainer.appendChild(div);
                }
            }
        });
    }
}

function checkInput(input) {
    if (input.value === '') {
        if (false === input.classList.contains('is-invalid')) {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
        return false;
    } else {
        if (false === input.classList.contains('is-valid')) {
            input.classList.toggle('is-valid');
            input.classList.remove('is-invalid');
        }
        return true;
    }
}

window.addEventListener('load', () => {
    initPokemonsButtons();
    createPokemons(151, document.querySelector('div.row.block-pokemons'));
    formPokemon();
    //getToPokemon(150);

});


