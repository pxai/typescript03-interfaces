class Car {
    public plate: string;
    protected kilometers: number;
    private owner: string;
    private tank: number;
    
    // Only one Constructor is allowed
 /*   constructor () {
        this.plate = '0666EVL';
        this.kilometers = 0;
        this.owner = 'Eugene Krabs';
        this.tank = '';
    }*/
    
    constructor(plate: string, kilometers: number, owner: string, tank: number) {
        this.plate = plate;
        this.kilometers = kilometers;
        this.owner = owner;
        this.tank = tank;
    }
    
    public start () {
        console.log('Starting engine');
    }
    
    public drive (distance: number) : number {
        console.log('Running distance ' + distance);
        var consumption: number = Math.round(Math.random() * distance);
        
        if ( this.tank - consumption < 0 ) {
            this.tank = 0;
        } else {
            this.tank = this.tank - consumption;
        }

            return consumption;
        
    }

}

var oneCar : Car = new Car('0747BNG',0,'Eugene Krabs',40);
oneCar.start(); 

console.log(oneCar.drive(5));