import { FilterMetadata } from "primeng/api";

export interface TableLazyLoadEvent {
    first: number;
    rows: number;
    sortOrder: -1 | 1;
    sortField: string;
    filters: {
      [s: string]: FilterMetadata;
    };
  }