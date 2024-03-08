import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlOptions } from 'app/shared/utils/crud-item-options/control-options.model';
import { FORM_ERROR_MESSAGES } from 'app/shared/utils/validators/form-error-messages';
import { SelectItem } from 'primeng/api';
import { debounceTime, Observable, of, Subject } from 'rxjs';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormControlComponent<T> {

  @Input() controlConfig: CrudItemOptions;
  @Input() creation = false;
  @Input() formCtrl: FormControl;
  @Output() tableControlClicked: EventEmitter<CrudItemOptions> = new EventEmitter();
  @Output() childControlChanged: EventEmitter<T> = new EventEmitter();
  @Output() valuePreset: EventEmitter<{ ctrl: string; value: unknown }> = new EventEmitter();

  public ControlType = ControlType;

  public autocompleteSuggestions$: Observable<SelectItem[]> = of([]);
  private autocompleteValidity$: Subject<void> = new Subject();

  get controlOptions(): ControlOptions {
    return this.controlConfig.controlOptions || {};
  }

  get controlUnavailable(): boolean {
    return (this.creation && this.controlOptions.disableOnCreate) ||
      (!this.creation && this.controlOptions.disableOnUpdate)
  }

  get controlVisible(): boolean {
    return (this.creation && !this.controlOptions.hideOnCreate) ||
      (!this.creation && !this.controlOptions.hideOnUpdate);
  }

  get isRequired(): boolean {
    return this.formCtrl.hasValidator(Validators.required);
  }

  get error(): string {
    const errorKeys = Object.keys(this.formCtrl.errors);
    if (!errorKeys.length) return '';
    const firstError = errorKeys[0];
    return FORM_ERROR_MESSAGES[firstError] ?? FORM_ERROR_MESSAGES['*'];
  }

  constructor() {
    this.autocompleteValidity$.pipe(
      debounceTime(200),
    ).subscribe(() => {
      // Set validitity to false while user does not select a suggested value
      this.formCtrl.setErrors({ unknownValue: true });
    });
  }

  public onTableDisplay(control: CrudItemOptions) {
    this.tableControlClicked.emit(control);
  }

  public getChildControl(control: CrudItemOptions, childKey: unknown): CrudItemOptions {
    const childControl = control.children.find(child => child.key === childKey || child.key === 'noKey');
    return {
      ...childControl,
      key: childControl.key === 'noKey' ? childKey as string : childControl.key,
      // options
    };
  }

  public updateChildControlValue(event: { value: T }) {
    this.childControlChanged.emit(event.value);
  }

  public onAutocomplete(event: string): void {
    this.autocompleteSuggestions$ = this.controlOptions.searchOptionsFn(event);
  }

  public onAutocompleteKeyUp() {
    this.autocompleteValidity$.next();
  }

  public onSelect(event: SelectItem): void {
    this.formCtrl.setValue(event.label);
    // Set validity to true
    this.formCtrl.updateValueAndValidity();
    const presetValue: {ctrl: string; value: unknown } = this.controlOptions.onSelect(event);
    this.valuePreset.emit(presetValue);
  }
}
