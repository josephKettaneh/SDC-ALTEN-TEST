import { ColumnOptions } from "app/shared/utils/crud-item-options/column-options.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";

type TableColumnBase = CrudItemOptions & ColumnOptions;
export interface TableColumn extends TableColumnBase {
  key: string;
  renderer: (cell: unknown) => string;
  isList?: boolean;
  isVisible?: boolean;
}
