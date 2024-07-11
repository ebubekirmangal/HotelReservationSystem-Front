export interface GetAllRoomByHotelIdResponse {
  id: number;
  roomType: RoomType;
  capacity: number;
  title: string;
  price: number;
  featuresIds: number[];
  hotelName: string;
  imageIds: number[];
}

export enum RoomType {
  Single = 'SINGLE',
  Double = 'DOUBLE',
  Suite = 'SUITE',
  Deluxe = 'DELUXE',
  Family = 'FAMILY',
  King = 'KING'
  
}
//GetAllRoomByHotelIdResponse