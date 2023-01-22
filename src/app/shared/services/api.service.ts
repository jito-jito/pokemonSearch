import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { PokemonResourceList } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = 'https://pokeapi.co/api/v2/pokemon?limit=2000'

  constructor(
    private http: HttpClient 
  ) { }

  getPokemonResourceList() {
    return this.http.get<PokemonResourceList>(this.API)
  }
}
