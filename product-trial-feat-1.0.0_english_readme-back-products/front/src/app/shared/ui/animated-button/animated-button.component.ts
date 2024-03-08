import { Component, Input, EventEmitter, Output } from '@angular/core';

export type ButtonState = 'default' | 'isLoading' | 'isDone' | 'isEnabled';
export interface ButtonConfig {
  defaultLabel: string;
  defaultIcon: string;
  loadingLabel: string;
  doneLabel: string;
  hideLabel?: boolean;
  checkIcon?: string;
  backgroundColor?: string;
}
const defaultConfig: ButtonConfig = {
  defaultLabel: 'Save',
  defaultIcon: 'save',
  loadingLabel: 'Saving...',
  doneLabel: 'Saved',
  hideLabel: false,
  checkIcon: 'check'
};

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss']
})
export class AnimatedButtonComponent {

  @Input() state: ButtonState = 'default';
  @Input() config: ButtonConfig = defaultConfig;
  @Input() width = 'auto';
  @Output() clicked: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public onClick() {
    this.clicked.emit();
  }

}
