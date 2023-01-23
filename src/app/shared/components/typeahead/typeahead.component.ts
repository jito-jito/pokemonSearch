import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, map } from 'rxjs';
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  standalone: true,
	imports: [NgbTypeaheadModule, FormsModule, JsonPipe],
	styles: [
		`
			.form-control {
				width: 300px;
			}
		`,
	],
})



export class TypeaheadComponent implements OnInit {
	@Input() searchValue = ''
	@Output() changeInput = new EventEmitter<string>()
	states = [
		'I need to add the names of the pokemons here',
		'pikachiu',
		'chariziard' // added as examples xd
	];

	constructor (
		private storeService: StoreService
	) {	}
	

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
	);

	ngOnInit() {
		this.storeService.pokemonResourceList$
		.pipe(
			map(data => data.results.map(data => data.name))
		)
		.subscribe({
			next: (data) => {
				this.states = data
			}
		})
	}

	onChangeValue() {
		this.changeInput.emit(this.searchValue)
	}
}