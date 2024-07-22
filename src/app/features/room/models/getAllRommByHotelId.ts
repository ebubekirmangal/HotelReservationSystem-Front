import { RoomType } from "./roomType";

export interface GetAllRoomByHotelIdResponse {
    id: number;
    roomType: RoomType;
    capacity: number;
    title: string;
    price: number;
    featureNames: string[];
    hotelName: string;
    imageIds: number[];
   
  }