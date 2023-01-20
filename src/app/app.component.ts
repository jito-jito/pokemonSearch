import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonSearch';
  page:number = 0

  constructor( private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getPokemons().subscribe(
      (data) => console.log(data)
    )
  }
}
