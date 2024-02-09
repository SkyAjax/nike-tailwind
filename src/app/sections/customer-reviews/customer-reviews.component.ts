import { Component } from '@angular/core';
import { CustomerReviewComponent } from '../../components/customer-review/customer-review.component';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CustomerReviewComponent],
  templateUrl: './customer-reviews.component.html',
  styles: ``
})
export class CustomerReviewsComponent {
  reviews = [
    {
        imgURL: 'customer1.jpeg',
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: 'customer2.svg',
        customerName: 'Lota Mongeskar',
        rating: 4.9,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
  ]
}
