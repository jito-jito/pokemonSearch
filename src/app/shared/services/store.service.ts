import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonResourceList } from '../../models/store.model' // change to create a unic type with pokemon model

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private pokemonResourceList = new BehaviorSubject<PokemonResourceList>({
    count: 0,
    results: [{
      name: '',
      url: ''
    }]
  })
  resultsContainer = []
  
  pokemonResourceList$ = this.pokemonResourceList.asObservable()

  constructor() { }

  setPokemonResourceList(data: PokemonResourceList) {
    this.pokemonResourceList.next(data)
  }

}
