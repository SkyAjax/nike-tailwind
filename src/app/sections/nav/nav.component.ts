import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconComponent, NgIf],
  templateUrl: './nav.component.html',
  styles: ``,
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavComponent {
  isOpened: boolean = false;

  openMobileNav() {
    this.isOpened = !this.isOpened;
    const body = document.body;
    body.setAttribute('style', `overflow: ${this.isOpened ? 'hidden' : 'auto'}`);

  }

  navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#contact-us', label: 'Contact Us' },
  ];
}
