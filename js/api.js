const ID = 19
const API = 'https://pokeapi.co/api/v2/pokemon/'
const detailsAPI = `https://pokeapi.co/api/v2/pokemon/${ID}/`

export const getPokemon = async () => {
    try{
        const getPokemonApi = await fetch(API)
        const data = await getPokemonApi.json();

        document.getElementById("pokemonName").innerHTML = `${data.results[`${ID}`].name}`

        const getPokemonImageApi = await fetch(detailsAPI)
        const image = await getPokemonImageApi.json();

        document.getElementById("pokemonImage").innerHTML = `<img src="${image.sprites.front_default}" alt="">`
        return data && image

    }catch{
        console.log("Hay un error")
    }
}