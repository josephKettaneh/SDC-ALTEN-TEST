import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { debounceTime } from 'rxjs/operators';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent<T> implements OnInit {
  @Input() controls: CrudItemOptions[] = [];
  @Input() values: any;
  @Input() creation: boolean;
  @Output() formChanged: EventEmitter<{ value: T; valid?: boolean }> = new EventEmitter();
  @Output() tableControlClicked: EventEmitter<CrudItemOptions> = new EventEmitter();

  public controlsWithValues: CrudItemOptions[];
  public form: FormGroup;

  constructor(
    private readonly dynamicFormService: DynamicFormService,
  ) {

  }

  ngOnInit(): void {
    this.assignValues();
    this.form = this.dynamicFormService.toFormGroup(this.controlsWithValues || []);

    this.form.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(formValue => {
      // Must convert date values from Date to number...
      const dateCtrls = this.controlsWithValues.filter(control => control.controlType === 'date') || [];
      dateCtrls.forEach((ctrl) => {
        if (formValue[ctrl.key]) {
          formValue[ctrl.key] = new Date(formValue[ctrl.key]).getTime();
        }
      });
      // Emit changes
      this.formChanged.emit({ value: formValue, valid: this.form.valid });
    });
  }

  public updateControl(event: { ctrl: string; value: unknown }) {
    this.form.get(event.ctrl).setValue(event.value);
  }

  public onTableDisplay(control: CrudItemOptions) {
    this.tableControlClicked.emit(control);
  }

  public updateChildControlValue(value: T, control: CrudItemOptions) {
    const rootProp = control.key;
    const newValues = { ...this.values[rootProp], ...value };
    let newProp = { [rootProp]: newValues };
    if (control.controlType === 'list' && this.values[rootProp].length !== undefined) {
      newProp = { [rootProp]: Object.values(newValues) };
    }
    this.values = { ...this.values, ...newProp };
    this.formChanged.emit({ value: this.values });
  }

  private assignValues(): void {
    this.controlsWithValues = this.controls.map(control => ({
      ...control,
      value: this.values[control.key]
    }));
  }
}
