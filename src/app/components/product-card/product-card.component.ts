import { Component, Input } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product!: {
    imgURL: string;
    name: string;
    price: string;
  }

  url!: string;

  ngOnInit() {
    this.url = `../../assets/images/${this.product.imgURL}.svg`
  }

}
