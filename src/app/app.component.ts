import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularProductsComponent } from './sections/popular-products/popular-products.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { CustomerReviewsComponent } from './sections/customer-reviews/customer-reviews.component';
import { ServicesComponent } from './sections/services/services.component';
import { SpecialOfferComponent } from './sections/special-offer/special-offer.component';
import { SubscribeComponent } from './sections/subscribe/subscribe.component';
import { SuperQualityComponent } from './sections/super-quality/super-quality.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavComponent } from './sections/nav/nav.component';
import { IconComponent } from './components/icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PopularProductsComponent,
    HeroSectionComponent,
    CustomerReviewsComponent,
    ServicesComponent,
    SpecialOfferComponent,
    SubscribeComponent,
    SuperQualityComponent,
    FooterComponent,
    NavComponent,
    IconComponent
  ],
  templateUrl: './app.component.html',
  styles: '',
})
export class AppComponent {
}
