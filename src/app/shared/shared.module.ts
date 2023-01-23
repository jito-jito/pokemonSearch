import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PaginationResultsComponent } from './components/pagination-results/pagination-results.component';

@NgModule({
  declarations: [
    PokemonItemComponent,
    PaginationResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonItemComponent,
    PaginationResultsComponent
  ]
})
export class SharedModule { }
