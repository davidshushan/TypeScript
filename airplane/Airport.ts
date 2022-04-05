// let country1 = ["israel", "japan", "england", "france", "italy", "brazil", "hungary", "moroco", "holand", "canada"]

class Airport {
 //Destination List
     DestinationList:Destination[];

//Airplane List
     AirplaneList:Airplane[] ;


    public constructor() {
        this.AirplaneList = new Array<Airplane>(100);
        this.DestinationList = new Array<Destination>(10);
   }


public BuyTickets(Destination:string, numOfSeats:number=1,seatsType:string):string {
    let flag:boolean = false;
    for (let i= 0; i < this.AirplaneList.length && flag ==false; i++) {
        if(this.AirplaneList[i].getPlaneDestination().getCountry() == Destination){
            if(this.AirplaneList[i].BuySeats(numOfSeats)==true){
                flag = true;
                return `price: ${this.AirplaneList[i].CalcPriceTicket(seatsType)*numOfSeats}`
            }
        }
    }
    return `the buying ticket action didn't completed sucssesfuly!!`
}

 toString():string{ 
     return `Airplane List:${this.AirplaneList.forEach(airplan => {airplan.toString()})},  `; 

     }
}








