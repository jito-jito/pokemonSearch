import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
	standalone: true,
	imports: [NgbPaginationModule],
})
export class PaginationComponent implements OnInit {
	@Input() collectionSize = 0
	@Input() pageSize = 0
	@Input() page = 1;

	@Output() changePage = new EventEmitter() 

	constructor(
		private storeService: StoreService
	) {}

	onChangePage(changes: any) {
		this.changePage.emit(changes)
	}

	ngOnInit() {
		this.storeService.paginationConfig$
		.subscribe({
			next: (paginationConfig) => {
				this.collectionSize = paginationConfig.collectionSize
				this.pageSize = paginationConfig.pageSize
			}
		})
	}
}