import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {
  services = [
    {
        imgURL: 'truck-fast',
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: 'shield-tick',
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: 'support',
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
}
