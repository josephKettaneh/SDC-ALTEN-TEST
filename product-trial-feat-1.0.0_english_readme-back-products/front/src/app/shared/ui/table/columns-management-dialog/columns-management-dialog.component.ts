import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from 'app/shared/ui/table/table-column.model';

@Component({
  selector: 'app-columns-management-dialog',
  templateUrl: './columns-management-dialog.component.html',
  styleUrls: ['./columns-management-dialog.component.scss']
})
export class ColumnsManagementDialogComponent implements OnInit {

  @Input() cols: TableColumn[];
  @Input() visible = false;
  @Output() hide: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onHide(): void {
    this.hide.emit();
  }

}
