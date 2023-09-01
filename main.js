let totalPokemon = 151;
const changeTotalPokemon = [151,251];
let is151 = true;
let is251 = false;
window.addEventListener('load', () => {
function createPokemons()
{
    pokemonsContainer.innerHTML = "";
    for (let i = 1; i <= totalPokemon; i++){
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.classList.add('col-sm-12');
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ i +'.png';
        img.setAttribute('src', urlImage);
        div.appendChild(img);
        pokemonsContainer.appendChild(div);
    }
}


    const btnSwitchTotalPokemon151 = document.querySelector('button.btn.btn-primary.btn-switch-totalPokemon.btn-151');
    const btnSwitchTotalPokemon251 = document.querySelector('button.btn.btn-primary.btn-switch-totalPokemon.btn-251');
    const pokemonsContainer = document.querySelector('div.row.block-pokemons');    

    createPokemons();
    btnSwitchTotalPokemon151.addEventListener('click', () => {
        if(!is151)
        {
         totalPokemon = 151;
         is151 = true;
         is251 = false;
         createPokemons()
         console.log(totalPokemon);
        }

        });
        btnSwitchTotalPokemon251.addEventListener('click', () => {
            if(!is251)
            {
             totalPokemon = 251;
             is151 = false;
             is251 = true;
             createPokemons()
             console.log(totalPokemon);
            }
    
            });
        
});


