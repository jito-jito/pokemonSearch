import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
	standalone: true,
	imports: [NgbPaginationModule],
})
export class PaginationComponent {
	page = 1;

	onChangePage(changes: any) {
		console.log(changes)
	}
}