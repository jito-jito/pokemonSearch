import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { PokemonResourceList, Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base_API = 'https://pokeapi.co/api/v2'

  constructor(
    private http: HttpClient 
  ) { }

  getPokemonResourceList() {
    const resourceUrl = '/pokemon?limit=2000'
    return this.http.get<PokemonResourceList>(`${this.base_API}${resourceUrl}`)
  }

  getPokemonByName(pokemonName : string) {
    const resourceUrl = `/pokemon/${pokemonName}`
    return this.http.get(`${this.base_API}${resourceUrl}`)
  }

  getPokemonByUrl(url: string) {
    return this.http.get<Pokemon>(url)
  }
}
