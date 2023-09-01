let totalPokemon = 151;
const changeTotalPokemon = [151,251];
let is151 = true;
window.addEventListener('load', () => {
function createPokemons()
{
    pokemonsContainer.innerHTML = "";
    for (let i = 1; i <= totalPokemon; i++){
        const div = document.createElement('div');
        // On ajoute la classe CSS 'col-4' à cette div
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.classList.add('col-sm-12');
        // On créé une balise HTML de type img
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        // On génère une chaine de caractères corespondant à l'image du Pokémon
        const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ i +'.png';
        // On insère l'image du pokémon dans la balise img
        img.setAttribute('src', urlImage);
        // On ajoute l'img à la div.col-4
        div.appendChild(img);
        //  On ajoute la div.col-4 (qui contient maintenant l'image) à la div du block principal
        pokemonsContainer.appendChild(div);
    }
}


    const btnSwitchTotalPokemon = document.querySelector('button.btn.btn-primary.btn-switch-totalPokemon');
    const pokemonsContainer = document.querySelector('div.row.block-pokemons');    

    createPokemons();
    btnSwitchTotalPokemon.addEventListener('click', () => {
        if(is151)
        {
         totalPokemon = 251;
         is151 = false
         
        }
        else
        {
         totalPokemon = 151;
         is151 = true;

        }
        
        createPokemons()
        console.log(totalPokemon);
        });
});


