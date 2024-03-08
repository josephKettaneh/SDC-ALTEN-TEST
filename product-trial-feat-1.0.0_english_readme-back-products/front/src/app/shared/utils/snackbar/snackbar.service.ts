import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class SnackbarService {

  constructor(
    private readonly messageService: MessageService
  ) { }
  
  public displayError(message = 'An error occured') {
    this.show({
      severity: 'error',
      detail: message
    });
  }

  public displaySuccess() {
    this.show({
      key: 'topRight',
      severity: 'success',
      closable: false
    });
  }

  public displayInfo(message: string) {
    this.show({
      detail: message
    });
  }

  private show(messageConfig: Message): void {
    if (!messageConfig.key) {
      if (!messageConfig.severity) {
        messageConfig.severity = 'info';
      }
      if (!messageConfig.summary) {
        messageConfig.summary = TitleCasePipe.prototype.transform(messageConfig.severity);
      }
    }
    this.messageService.add(messageConfig);
  }
}
