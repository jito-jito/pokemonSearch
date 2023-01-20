import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = 'https://pokeapi.co/api/v2/pokemon?limit=2000'

  constructor(
    private http: HttpClient 
  ) { }

  getPokemons() {
    return this.http.get(this.API)
  }
}
