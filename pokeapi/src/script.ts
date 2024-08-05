import { fetchPokemon, fetchDetails } from "./fetch.js"; 

document.addEventListener('DOMContentLoaded', async () =>{
    const data = await fetchPokemon();
    const details = await fetchDetails();
    const ul = <HTMLUListElement> document.getElementById("items");

    data.forEach((pokemon)=>{
        const li = <HTMLLIElement> document.createElement("li");
        const name = <HTMLHeadingElement> document.createElement("h4");

        const pokemonDetails = details.find((detail)=>detail.name === pokemon.name);

        if (pokemonDetails){
            const img = <HTMLImageElement> document.createElement("img");
            img.src = pokemonDetails.sprites.other!["official-artwork"].front_default;
            img.alt = `${pokemon.name} image`;
            li.append(img);
        }

        name.innerText = `${pokemon.name}`;
        li.append(name)
        ul.appendChild(li);
    })
    
})