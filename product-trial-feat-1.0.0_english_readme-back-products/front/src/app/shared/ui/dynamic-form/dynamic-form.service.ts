import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlValidator } from 'app/shared/utils/crud-item-options/control-options.model';

@Injectable()
export class DynamicFormService {
  constructor() {}

  public toFormGroup(controls: CrudItemOptions[]) {
    const group: { [key: string]: FormControl } = {};

    controls.forEach(control => {
      const value = this.getValue(control);
      const validators = this.getValidators(control);
      group[control.key] = new FormControl(value, validators);
    });
    return new FormGroup(group);
  }

  private getValue(control: CrudItemOptions): unknown {
    let value = control.controlType === 'date' ? new Date(control.value) : control.value;
    return value || '';
  }

  private getValidators(control: CrudItemOptions): ControlValidator[] {
    return control.controlOptions?.validators?.length ? control.controlOptions.validators : [];
  }
}
