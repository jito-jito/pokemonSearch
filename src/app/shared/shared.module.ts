import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    PokemonItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonItemComponent
  ]
})
export class SharedModule { }
