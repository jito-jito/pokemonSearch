export interface PokemonResourceList {
    count: number,
    results: [{
      name: string,
      url: string
    }]
}