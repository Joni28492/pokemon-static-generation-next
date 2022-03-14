import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";



export const getPokemonInfo = async(nameOrId: string)=>{


    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        }
    } catch (error) {
        //aqui cae el 404
        return null;
    }
}