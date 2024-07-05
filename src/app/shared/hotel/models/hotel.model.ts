import { Room} from "./room.model";


export interface Hotel {
    id:number;
    name:string;
    address:string;
     star:number;
    images:string[];
    features:string[];
    room?:Room[];

  }

export{Room}
  