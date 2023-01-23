import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service'
import { StoreService } from './shared/services/store.service';
import { PokemonResourceList, Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 0
  searchValue = ''
  pokemonResult: null | Pokemon = null 

  notFoundPokemon = {
    id: 0,
    name: 'Pokemon Not found',
    sprites: {
      back_default: '../assets/images/notFound.png',
      back_female: '',
      back_shiny:'',
      back_shiny_female: '',
      front_default: '',
      front_female: '',
      front_shiny: '',
      front_shiny_female: ''
    }
  }

  constructor( 
    private apiService: ApiService,
    private storeService: StoreService
    
  ) {

  }

  ngOnInit() {
    this.apiService.getPokemonResourceList().subscribe(
      (data) => {
        this.storeService.setPokemonResourceList(data)
      }
    )
  }

  changeSearchValue(value: string) {
    this.searchValue = value
  }

  searchPokemon(inputValue: string) {
    this.apiService.getPokemonByName(inputValue)
    .subscribe({
      next: (data) => this.pokemonResult = data as Pokemon
    })
  }
  
  resetSearch() {
    this.pokemonResult = null
  }
}
