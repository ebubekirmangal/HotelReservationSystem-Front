export interface GetByIdHotelResponse{
    id:number;
    name:string;
    userId:number;
    addressDescription:string;
    star:number;
    imageIds:number[];
    featureIds: number[];
    phoneNumber:string;
    email:string;
}