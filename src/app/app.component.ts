import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service'
import { StoreService } from './shared/services/store.service';
import { PokemonResourceList } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonSearch';
  page:number = 0

  constructor( 
    private apiService: ApiService,
    private storeService: StoreService
    
  ) {

  }

  ngOnInit() {
    this.apiService.getPokemonResourceList().subscribe(
      (data) => {
        console.log(data)
        this.storeService.setPokemonResourceList(data)
      }
    )
  }
}
