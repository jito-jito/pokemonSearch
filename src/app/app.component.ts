import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from './shared/services/api.service'
import { StoreService } from './shared/services/store.service';
import { PokemonResourceList, Pokemon } from './models/pokemon.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  searchValue = ''
  pokemonResult: null | Pokemon = null 
  
  resourceOfPokemons: {name: string, url: string}[] = []
  page = 1
  pageSize = 0
  loadingRessults = false

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
  ) { }

  ngOnInit() {
    this.storeService.pokemonResourceList$
    .pipe(
      map(data => data.results)
    )
    .subscribe({
      next: (data) => {this.resourceOfPokemons = data}
    })

    this.storeService.paginationConfig$.subscribe({
      next: (pagConfig) => {this.pageSize = pagConfig.pageSize
      }
    })
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

  changePage(currPage: any) {
    this.loadingRessults = true
    console.log(currPage)
    this.page = currPage

    setTimeout(() => { this.loadingRessults = false }, 2000)
  }
}
