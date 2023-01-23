import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonResourceList } from '../../models/store.model' // change to create a unic type with pokemon model
import { ApiService } from './api.service';

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
  private paginationConfig = new BehaviorSubject({
    collectionSize: 0,
    pageSize: 15
  })
  
  resultsContainer = []
  
  pokemonResourceList$ = this.pokemonResourceList.asObservable()
  paginationConfig$ = this.paginationConfig.asObservable()

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getPokemonResourceList().subscribe(
      (data) => {
        this.setPokemonResourceList(data)
      }
    )
   }

  setPokemonResourceList(data: PokemonResourceList) {
    this.pokemonResourceList.next(data)
    this.paginationConfig.next({
      collectionSize: data.count,
      pageSize: 15
    })
  }

}
