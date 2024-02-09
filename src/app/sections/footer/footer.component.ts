import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  socialMedia = [
    { src: 'facebook', alt: 'facebook logo' },
    { src: 'twitter', alt: 'twitter logo' },
    { src: 'instagram', alt: 'instagram logo' },
  ];

  footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Air Force 1', link: '/' },
        { name: 'Air Max 1', link: '/' },
        { name: 'Air Jordan 1', link: '/' },
        { name: 'Air Force 2', link: '/' },
        { name: 'Nike Waffle Racer', link: '/' },
        { name: 'Nike Cortez', link: '/' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'About us', link: '/' },
        { name: 'FAQs', link: '/' },
        { name: 'How it works', link: '/' },
        { name: 'Privacy policy', link: '/' },
        { name: 'Payment policy', link: '/' },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
        { name: '+92554862354', link: 'tel:+92554862354' },
      ],
    },
  ];
}
