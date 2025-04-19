import { HotelDataModel } from '../../features/hotel/store/hotel.model';

export interface HotelsStateInterface {
  hotels: HotelDataModel[];
  isLoading: boolean;
  error: string | null;
}
