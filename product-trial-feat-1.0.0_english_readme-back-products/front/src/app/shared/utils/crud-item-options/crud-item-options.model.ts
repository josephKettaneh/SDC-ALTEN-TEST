import { ColumnOptions } from "app/shared/utils/crud-item-options/column-options.model";
import { ControlOptions } from "app/shared/utils/crud-item-options/control-options.model";
import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { SelectItem } from "primeng/api";

export interface CrudItemOptions {
  /** Unique identifier */
  key: string | number;
  /** Label of the form control and the datatable column */
  label: string;
  /** Represents the type of the form control: input, select, autocomplete... */
  controlType: ControlType;
  /** Specifies the type of the form control when it's an 'input': text, number... */
  type?: string;
  /** Contains the options of a 'select' or 'multiselect' form control */
  options?: SelectItem[];
  /** Sub-items for nested forms */
  children?: CrudItemOptions[];
  /** Defines whether the value of the item should appear in the breadcrumb */
  // TODO: keep?
  isBreadcrumbLabel?: boolean;
  /** Defines the options specific to the datatable column */
  columnOptions?: ColumnOptions;
  /** Defines the options specific to the form control */
  controlOptions?: ControlOptions;
  /** Contains the value of the item */
  value?: any;
}