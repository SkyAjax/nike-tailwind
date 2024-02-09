import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-products.component.html',
  styles: ``
})
export class PopularProductsComponent {
  products = [
    {
        imgURL: 'shoe4',
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: 'shoe5',
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: 'shoe6',
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: 'shoe7',
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];
}
