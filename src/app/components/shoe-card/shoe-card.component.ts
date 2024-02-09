import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoe-card',
  standalone: true,
  imports: [NgClass ],
  templateUrl: './shoe-card.component.html',
  styles: ``
})
export class ShoeCardComponent {

  @Input() imgName!: { thumbnail: string; bigShoe: string; };
  @Input() activeImage!: string;

  imgURL!: string;

  ngOnInit() {
    this.imgURL = `../../assets/images/${this.imgName.thumbnail}.svg`;
  }
}
