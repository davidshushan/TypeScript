// let country1 = ["israel", "japan", "england", "france", "italy", "brazil", "hungary", "moroco", "holand", "canada"]

class Destination {
    //עשיתי את המערך סטטי - לא היה ברור בשאלה עם צריך סטטי או לא
 private static countries:Array<string> = new Array<string>("israel", "japan", "england", "france", "italy", "brazil", "hungary", "moroco", "holand", "canada"); //readonly
 public getCountries():Array<string> { return Destination.countries};

 //Country
 private Country:string;
 public getCountry():string { return this.Country};
 public setCountry(country:string) { 
     if(Destination.countries.includes(country)){
         this.Country = country;
    }
 }
 private TimeOfFlight:number;
 public getTimeOfFlight():number { return this.TimeOfFlight};
 public setTimeOfFlight(timeOfFlight:number) {
      if(timeOfFlight >= 10 && timeOfFlight <=1500){
          this.TimeOfFlight = timeOfFlight;
      }
 }
 
 public constructor(country:string, timeOfFlight:number) {
     this.setCountry(country);
     this.setTimeOfFlight(timeOfFlight);
    //  this.Country = country;
    //  this.TimeOfFlight = timeOfFlight;
 }
 public flightHours():number {
     return (this.TimeOfFlight/60);
 }

 toString():string{
     return `Country: ${this.Country}, TimeOfFlight(hours): ${this.flightHours()}`;
 }


    

}

// console.log(Destination.countries)


