import { Component, Input } from '@angular/core';
import { TOOLTIP_CONFIG } from 'app/shared/ui/info-icon/tooltip.config';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss']
})
export class InfoIconComponent {
  @Input() message: string;
  @Input() position: string = TOOLTIP_CONFIG.tooltipPosition;
  @Input() icon = 'info-circle';
  // showDelay: number;
  // hideDelay: number;

  constructor() {}
}
