import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nxconf2022-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label!: string;
}
