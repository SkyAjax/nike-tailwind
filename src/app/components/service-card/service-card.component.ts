import { Component, Input } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './service-card.component.html',
  styles: ``
})
export class ServiceCardComponent {
  @Input() service!: {
    imgURL: string;
    label: string;
    subtext: string;
  }
}
