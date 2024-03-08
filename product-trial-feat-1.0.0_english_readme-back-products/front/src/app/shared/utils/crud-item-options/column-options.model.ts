import { ScreenWidth } from "app/shared/utils/crud-item-options/screen-width.model";

export class ColumnOptions {
  /** Defines if the column is sortable or not */
  sortable?: boolean;
  /** Defines if the column is filterable or not */
  filterable?: boolean;
  /** Applies a class on the column to be displayed */
  minScreenSize?: ScreenWidth;
  /** Custom tooltip renderer for the column cells */
  tooltip?: (cellValue: unknown) => string;
  /** Should the column be visible by default and not removable */
  default?: boolean;
  /** If set to true, the column won't appear in the table nor in the column management dialog */
  hidden?: true;
  /** Specifies a custom renderer for datatable cells */
  customCellRenderer?: (cellValue: unknown) => string;
}