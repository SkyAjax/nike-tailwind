import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './customer-review.component.html',
  styles: ``,
})
export class CustomerReviewComponent {
  @Input() review!: {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
  };

  imgLink = '';

  ngOnInit() {
    this.imgLink = `../../assets/images/${this.review.imgURL}`
  }
}
