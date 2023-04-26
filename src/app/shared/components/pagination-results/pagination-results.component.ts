import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import  { Pokemon } from '../../../models/pokemon.model'

@Component({
  selector: 'app-pagination-results',
  templateUrl: './pagination-results.component.html',
  styleUrls: ['./pagination-results.component.scss'],
  
})
export class PaginationResultsComponent implements OnInit {
  @Input()
  get pokemonResource() {
    return this.resourcePromises
  }
  set pokemonResource(resource: {name: string, url: string}[]) {
    this.resourcePromises = resource.map((data) => data.url)
  }
  resourcePromises: string[] = []
  pokemonData: Pokemon = {
    id: 0,
    name: '',
    sprites: {
      back_default: '',
      back_female: '',
      back_shiny:'',
      back_shiny_female: '',
      front_default: '',
      front_female: '',
      front_shiny: '',
      front_shiny_female: ''
    }
  }


  constructor( private apiservice: ApiService ) {

  }

  ngOnInit() {
    console.log(this.pokemonResource)
    console.log(this.resourcePromises)
    this.apiservice.getGroupOfPokemons(this.resourcePromises)
    // this.apiservice.getPokemonByUrl(this.pokemonResource.url)
    // .subscribe({
    //   next: (data) => this.pokemonData = data 
    // })
  }

  // async getPagePokemons() {
  //   Promise.all()
  // }
}
