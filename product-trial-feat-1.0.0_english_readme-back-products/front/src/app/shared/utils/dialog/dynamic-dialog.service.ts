import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {
  constructor(
    public readonly dialogService: DialogService
  ) {
  }

  public open(
    component: ComponentType<unknown>,
    config: DynamicDialogConfig,
    successFn?: (response: unknown) => void
  ): void {
    const ref = this.dialogService.open(component, {
      ...config,
      width: config.width || '70%',
      contentStyle: config.contentStyle || { "max-height": "500px", "overflow": "auto" },
      baseZIndex: config.baseZIndex ?? 10000
    });

    ref.onClose.pipe(
      filter(result => !!result)
    ).subscribe((result) => {
      successFn(result);
    });
  }
}
