import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { transition, trigger, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        query(':self', style({ opacity: 0 })),
        query(':self', animate('200ms', style({ opacity: 1 })) )
        
      ]),
      transition(':leave', [
        query(':self', style({ opacity: 1 }) ),
        query(':self', animate('200ms', style({ opacity: 0 })) )
      ])
    ])
  ]
})
export class PokemonItemComponent {
  @Input() pokemonData: Pokemon = {
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


  
}
