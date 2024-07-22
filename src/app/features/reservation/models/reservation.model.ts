export interface Reservation {
    roomType: string;
    location: string;
    checkInDate: string;
    checkOutDate: string;
    adults: number;
    nights: number;
    boardType: string;
    reservationNo: string;
    transactionCode: string;
    guestNames: string;
    totalAmount: number;
}