import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDataModel } from '../../store/hotel.model';

@Component({
    selector: 'app-card',
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true
})
export class CardComponent implements OnInit {
  @Input() hotel!: HotelDataModel | null;
  @Output() bookNowClick = new EventEmitter<string>();

  hotelBackgroundPhoto?: string;

  constructor() {}

  ngOnInit(): void {  
    this.hotelBackgroundPhoto = this.hotel?.cardBackground;
  }

  onBookNowClick() {
    this.bookNowClick.emit(this.hotel?.name);
  }
}
