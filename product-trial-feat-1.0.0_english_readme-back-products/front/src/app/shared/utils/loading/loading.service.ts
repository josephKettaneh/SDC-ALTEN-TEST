import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Mode = 'indeterminate' | 'determinate' | 'spin';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private defaultMode: Mode = 'indeterminate';
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public mode: Mode = this.defaultMode;

  constructor() {}

  public start(mode = this.defaultMode): void {
    this.mode = mode;
    this.isLoading$.next(true);
  }

  public stop(): void {
    this.isLoading$.next(false);
  }
}
