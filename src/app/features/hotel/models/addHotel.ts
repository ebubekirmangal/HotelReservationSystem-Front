export interface AddHotel{
    userId:number;

    name:string;

    star:number;

    phone:string;

    email:string;

    addressId:number;

    featureIds:number[];

    imageIds:number[];

    accommodationType:string;
}