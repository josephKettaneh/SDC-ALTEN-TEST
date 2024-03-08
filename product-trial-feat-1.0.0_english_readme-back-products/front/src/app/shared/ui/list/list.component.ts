import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DEFAULT_SEARCH_PARAMS, SearchParams, Sort } from 'app/shared/ui/list/search.model';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { debounceTime } from 'rxjs/operators';
import { ListService } from './list.service';

export interface ListHeaderOptionsBase {
  search: string;
  sort: string;
  rangeStart: string;
  rangeEnd: string;
}

export interface PaginationEvent {
  first: number;
  rows: number;
  sortField: string;
  sortOrder: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> implements OnInit {

  @ViewChild(DataView) dv: DataView;

  @Input() public readonly items: T[]; // Data
  @Input() public readonly pagination: boolean = false;
  @Input() public readonly totalRecords: number;
  @Input() public readonly listItemTemplate!: TemplateRef<unknown>;
  @Input() public readonly gridItemTemplate!: TemplateRef<unknown>;
  @Input() public readonly sortOptions: SelectItem[];
  @Input() public readonly layout: 'grid' | 'list' = 'grid';
  @Input() public readonly enableAdd: boolean; // can add item from list
  @Input() public readonly enableDateRange: boolean; // can filter by date range
  @Input() private readonly listKey!: string; // for local service storage
  @Input() public readonly sortKey!: string; // 'name', 'title'... search text param key
  @Input() public readonly dateRangeKey: string; // 'creationTime'... used with enableDateRange
  @Input() public readonly selectable: boolean;
  // Search performed by backend
  @Input() public readonly backEndSearch: boolean;

  @Output() pageChanged: EventEmitter<PaginationEvent> = new EventEmitter();
  @Output() filtered: EventEmitter<SearchParams> = new EventEmitter();
  @Output() addClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<T[]> = new EventEmitter();

  public sortField: string;
  public sortOrder: number;
  public searchParams: SearchParams = DEFAULT_SEARCH_PARAMS;
  public sortCtrl: FormControl = new FormControl('');
  public searchCtrl: FormControl = new FormControl('');
  public dateRangeCtrl: FormControl = new FormControl([new Date(), new Date()]);
  public selection: (T&{id})[] = [];

  private firstLoad = true;

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly listService: ListService
  ) {

  }

  ngOnInit(): void {
    this.searchParams = this.listService.getSearchConfig(this.listKey, this.sortKey);

    this.primengConfig.ripple = true;

    this.searchCtrl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(term => {
      this.storeSearchParams({ search: term });
      if (this.backEndSearch) {
        this.emitFilters();
      } else {
        this.dv.filter(term);
      }
    });

    this.sortCtrl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(sortKey => {
      const [order, field] = sortKey.split('-');
      this.storeSearchParams({ sortField: field, sortOrder: order });
      if (this.backEndSearch) {
        this.emitFilters();
      } else {
        this.sortOrder = order === Sort.desc ? -1 : 1;
        this.sortField = field;
      }
    });

    this.dateRangeCtrl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe((dates) => {
      this.storeSearchParams({ from: new Date(dates[0]).getTime(), to: new Date(dates[1]).getTime() });
      if (this.backEndSearch) {
        this.emitFilters();
      }
    });

    // Set values from search params
    const sortKey = `${this.searchParams.sortOrder}-${this.searchParams.sortField}`;
    this.sortCtrl.setValue(sortKey, { emitEvent: false });
    this.searchCtrl.setValue(this.searchParams.search || '', { emitEvent: false });
    const from = this.searchParams.from ? new Date(this.searchParams.from) : new Date();
    const to = this.searchParams.to ? new Date(this.searchParams.to) : new Date();
    this.dateRangeCtrl.setValue([from, to], { emitEvent: false });
  }

  public selectItem({ checked }, item: T&{id}) {
    if (checked) {
      this.selection.push(item);
    } else {
      this.selection = this.selection.filter(s => s.id !== item.id);
    }
  }

  public onDeleteSelection(): void {
    this.deleteSelection();
  }

  private deleteSelection(): void {
    this.deleteClicked.emit(this.selection);
  }

  public onPageChange(event: PaginationEvent) {
    if (!this.firstLoad) {
      this.storeSearchParams({ first: event.first, rows: event.rows });
      this.pageChanged.emit(event);
    }
    this.firstLoad = false;
  }

  public add(): void {
    this.addClicked.emit();
  }

  private storeSearchParams(changes: Partial<SearchParams>): void {
    this.searchParams = { ...this.searchParams, ...changes };
    this.listService.storeSearchConfig(this.searchParams, this.listKey);
  }

  private emitFilters(): void {
    this.filtered.emit(this.searchParams);
  }
}
