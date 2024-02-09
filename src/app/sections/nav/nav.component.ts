import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {
  navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];
}
