import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-actions-cell',
  templateUrl: './table-actions-cell.component.html',
  styleUrls: ['./table-actions-cell.component.scss']
})
export class TableActionsCellComponent {

  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  public onEdit(): void {
    this.editClicked.emit();
  }

  public onDelete(): void {
    this.deleteClicked.emit();
  }

}
