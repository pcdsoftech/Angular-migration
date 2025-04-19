import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HotelDataModel } from '../../store/hotel.model';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../core/models/app-state.model';
import {
  errorSelector,
  hotelsSelector,
  isLoadingSelector,
} from '../../store/hotels.selectors';
import { Router } from '@angular/router';
import slugify from 'slugify';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-content',
    imports: [CommonModule, CardComponent],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    standalone: true
})
export class ContentComponent {
  isLoading$: Observable<boolean | null>;
  error$: Observable<string | null>;
  hotels$: Observable<HotelDataModel[] | null>;

  constructor(private readonly store: Store<AppStateInterface>, private readonly router: Router) {
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.hotels$ = this.store.pipe(select(hotelsSelector));
  }

  onHotelBookNowClick(hotelName: string) : void {
    const slug = slugify(hotelName);
    this.router.navigate(['hotel-listing', slug]);
  }
}
