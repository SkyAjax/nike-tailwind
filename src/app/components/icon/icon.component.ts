import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `<a
    ><img [src]="this.sngPath" [width]="width" [height]="height"
  /></a>`,
  styles: ``,
})
export class IconComponent {
  @Input() iconName!: string;
  @Input() width?: number;
  @Input() height?: number;

  sngPath: string | undefined;

  ngOnInit() {
    this.sngPath = `../../assets/icons/${this.iconName}.svg`;
  }
}
