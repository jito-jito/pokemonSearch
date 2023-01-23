import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import  { Pokemon } from '../../../models/pokemon.model'

@Component({
  selector: 'app-pagination-results',
  templateUrl: './pagination-results.component.html',
  styleUrls: ['./pagination-results.component.scss'],
  
})
export class PaginationResultsComponent implements OnInit {
  @Input() pokemonResource: {name: string, url: string} = {name: '', url: ''}
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
    this.apiservice.getPokemonByUrl(this.pokemonResource.url)
    .subscribe({
      next: (data) => this.pokemonData = data 
    })
  }
}
