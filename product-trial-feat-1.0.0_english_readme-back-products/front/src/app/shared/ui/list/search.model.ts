export interface SearchParams {
    first: number;
    rows: number;
    sortField: string;
    sortOrder: string;
    search: string;
    from: number;
    to: number;
    parentId?: string;
  }

  export const DEFAULT_SEARCH_PARAMS: SearchParams = {
    first: 0,
    rows: 10,
    sortField: 'title',
    sortOrder: Sort.asc,
    search: '',
    from: null,
    to: null
  }

  export const enum Sort {
    asc = 'asc',
    desc = 'desc'
  }