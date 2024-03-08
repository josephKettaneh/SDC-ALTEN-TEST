import { TableLazyLoadEvent } from 'app/shared/ui/table/table-lazyload-event.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class BaseTableLoader {

    public loadData$: BehaviorSubject<TableLazyLoadEvent> = new BehaviorSubject(null);

    constructor() { }

    public loadData(event?: TableLazyLoadEvent): void {
        if (!event) { // no payload provided
            event = this.loadData$.value; // will emit the same value as the current one
        }
        this.loadData$.next(event); // triggers the reload of data table items
    }

    public handleReload(httpCall$: Observable<unknown>) {
        // Dont need to unsubscribe as http calls through HttpClient autocompletes
        httpCall$.subscribe(() => this.loadData());
    }
}
