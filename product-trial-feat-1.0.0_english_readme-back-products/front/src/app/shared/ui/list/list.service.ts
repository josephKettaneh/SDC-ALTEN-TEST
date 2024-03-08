import { Injectable } from '@angular/core';
import { DEFAULT_SEARCH_PARAMS, SearchParams } from 'app/shared/ui/list/search.model';

@Injectable()
export class ListService {

  private searchConfig: { [listKey: string]: SearchParams } = { };
  public loadedOnce: { [listKey: string]: boolean } = { };

  constructor() { }

  public storeSearchConfig(searchConfig: SearchParams, listKey: string): void {
    this.searchConfig[listKey] = searchConfig;
    this.loadedOnce[listKey] = true;
  }

  public getSearchConfig(listKey: string, sortKey: string): SearchParams {
    return this.searchConfig[listKey] || this.getDefaultConfig(sortKey);
  }

  public getDefaultConfig(sortKey: string): SearchParams {
    return { ...DEFAULT_SEARCH_PARAMS, sortField: sortKey };
  }
}
