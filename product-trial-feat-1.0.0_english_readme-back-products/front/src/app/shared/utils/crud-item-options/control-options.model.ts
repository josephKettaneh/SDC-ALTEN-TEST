import { AbstractControl, ValidationErrors } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { Observable } from "rxjs";

export type ControlValidator = (control: AbstractControl<any, any>) => ValidationErrors;

export class ControlOptions {
  /** Defines the method to trigger for the autocomplete suggestions */
  searchOptionsFn?: (event: string) => Observable<SelectItem[]>;
  /** Defines a method to trigger when user selects an autocomplete suggestion */
  onSelect?: (event: SelectItem) => { ctrl: string; value: unknown };
  /** Should the control be hidden on creation */
  hideOnCreate?: boolean;
  /** Should the control be hidden on update */
  hideOnUpdate?: boolean;
  /** Should the control be disabled on creation */
  disableOnCreate?: boolean;
  /** Should the control be disabled on update */
  disableOnUpdate?: boolean;
  /** Specifies validators for form control */
  validators?: ControlValidator[];
}