let airport1 = new Airport();
let d1 = new Destination("israel",100);
let d2 = new Destination("japan",200);
let d3 = new Destination("england",300);
let d4 = new Destination("france",400);
let d5 = new Destination("italy",500);
let d6 = new Destination("brazil",600);
let destinationArr = [d1, d2, d3, d4, d5, d6]

let p1 = new Airplane(d1);
let p2 = new Airplane(d2);
let p3 = new Airplane(d3);
let p4 = new Airplane(d4);
let p5 = new Airplane(d5);
let p6 = new Airplane(d6);

let airplaneArr = [p1, p2, p3, p4, p5, p6];


for (let i = 0; i < 6; i++) {
    airport1.DestinationList[i] = destinationArr[i];
    airport1.AirplaneList[i] = airplaneArr[i];
}

 airport1.BuyTickets("france",5,'economy');
 airport1.BuyTickets("italy",6,'firstClass');


 //cant print! tsc dont work in university computer



 