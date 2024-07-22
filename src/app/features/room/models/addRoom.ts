import { RoomType } from "./roomType";

export interface AddRoom{

    title:string;
    imageData:string[];
    price:number;
    roomType:RoomType;
    features:string[];
    hotelId:number;
}