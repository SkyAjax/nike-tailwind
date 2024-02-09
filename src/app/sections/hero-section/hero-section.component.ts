import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { ShoeCardComponent } from '../../components/shoe-card/shoe-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconComponent ,ShoeCardComponent, NgClass],
  templateUrl: './hero-section.component.html',
  styles: ``,
})
export class HeroSectionComponent {
  activeImage: string = 'big-shoe1';
  activeImgURL: string = '';

  statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
  ];

  shoes = [
    {
      thumbnail: 'thumbnail-shoe1',
      bigShoe: 'big-shoe1',
    },
    {
      thumbnail: 'thumbnail-shoe2',
      bigShoe: 'big-shoe2',
    },
    {
      thumbnail: 'thumbnail-shoe3',
      bigShoe: 'big-shoe3',
    },
  ];

  ngOnInit() {
    this.setActiveImage(this.activeImage);
  }

  setActiveImage(imgName: string) {
    this.activeImage = imgName;
    return this.activeImgURL = `../../assets/images/${imgName}.png`
  }
}
