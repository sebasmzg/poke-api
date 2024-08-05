import { IPokeInterface, Result, Details} from "./interface/poke-interface";

export const fetchDetails = async (): Promise<Details[]> => {

    let listPokemon: string[] = [];

    for (let pokemon=1; pokemon<=20; pokemon++){
        listPokemon.push(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    }

    console.log(listPokemon);

    const promises = listPokemon.map(async url => {
        const response = await fetch(url);
        try {
            if (!response.ok){
                throw new Error(`API call failed`)
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Failed to fetch data", error);
        }

    })

    const results = await Promise.all(promises);
    return results.filter((data): data is Details => data !== undefined);
}


export const fetchPokemon = async (): Promise<Result[]> => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok){
            throw new Error(`API call failed`)
        }
        const data: IPokeInterface = await response.json();
        console.log(data.results);
        return data.results;

    } catch (error) {
        console.error("Failed to fetch data", error);
        return [];
    }
}