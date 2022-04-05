// let country1 = ["israel", "japan", "england", "france", "italy", "brazil", "hungary", "moroco", "holand", "canada"]

class Airplane {

    //company name
 private static Company:string = "Boing";
 public getCompany():string { return Airplane.Company};

 //PlaneDestination
 private PlaneDestination:Destination;
 public getPlaneDestination():Destination { return this.PlaneDestination};

 
    public setPlaneDestination(planeDestination:Destination) {
     this.PlaneDestination = planeDestination};
 


    private Seats:string[][] = new Array<Array<string>>(12);

    //i added property called free seats
    private freeSeats:number;
    public getfreeSeats():number { return this.freeSeats};

    public constructor(planeDestination:Destination) {
        this.PlaneDestination = planeDestination;

        //initilize the matrix col for each row;
        for (let row = 0; row < this.Seats.length; row++) {
            this.Seats[row] = new Array<string>('-', '-', '-', '-', '-', '-');
        }
        this.freeSeats = this.Seats.length * this.Seats[0].length;      
   }


   public CalcPriceTicket(seatType:string):number {
    if(seatType == 'economy'){
        return (0.6* this.PlaneDestination.getTimeOfFlight());
    }
    else if(seatType == 'bussisness'){ // typo in bussisness word
        return (7* this.PlaneDestination.getTimeOfFlight());
    }
    else if(seatType == 'firstClass'){
        return (9* this.PlaneDestination.getTimeOfFlight());
    }
    else 
    console.error("seatstype is wrong!! in CalcPriceTicket function");
    return null;
}
public BuySeats(numOfTickets:number):boolean {

    if (numOfTickets <= 0) return false;
    if (numOfTickets > this.freeSeats) return false;

    for (let row = 0; row < this.Seats.length; row++) {
        for (let col = 0; col < this.Seats[row].length && numOfTickets>0; col++) {
            if(this.Seats[row][col] == '-'){
                this.Seats[row][col] = 'v';
                numOfTickets--;
                this.freeSeats--;
            }
        }
    }
    if(numOfTickets == 0) return true;
    return false;
}

 toString():string{ 
     return `Company: ${Airplane.Company},  Plane Destination: ${this.PlaneDestination}, freeSeats: ${this.freeSeats}, Seats: ${this.Seats.forEach(array => {array.toString()})} `; 
     // i understand that Seats matrix should print in string, but if not can be printed like this:
    //  console.table(this.Seats)
     }
}








