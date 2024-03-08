import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';

@Component({
  selector: 'app-edition-dialog',
  templateUrl: './edition-dialog.component.html',
  styleUrls: ['./edition-dialog.component.scss']
})
export class EditionDialogComponent<T> {

  @Input() header: string;
  @Input() controls: CrudItemOptions[];
  @Input() creation: boolean;
  @Input() editedEntry: T;
  @Input() visible = false;

  @Output() hide: EventEmitter<void> = new EventEmitter();
  @Output() saved: EventEmitter<T> = new EventEmitter();

  public invalidForm: boolean = true;
  
  public onFormChanged(event: { value: T; valid?: boolean }): void {
    this.editedEntry = event.value;
    this.invalidForm = !event.valid;
  }

  public onSave(): void {
    this.saved.emit(this.editedEntry);
  }

  public onHide(): void {
    this.hide.emit();
  }

}
