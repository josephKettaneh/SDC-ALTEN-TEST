import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/ui/table/table-column.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';

@Component({
  selector: 'app-table-filter-cell',
  templateUrl: './table-filter-cell.component.html',
  styleUrls: ['./table-filter-cell.component.scss']
})
export class TableFilterCellComponent implements OnInit {

  @Input() col: TableColumn;
  public ControlType = ControlType;  

  constructor() { }

  ngOnInit(): void {
  }

}
