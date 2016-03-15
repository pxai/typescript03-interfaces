var Car = (function () {
    // Only one Constructor is allowed
    /*   constructor () {
           this.plate = '0666EVL';
           this.kilometers = 0;
           this.owner = 'Eugene Krabs';
           this.tank = '';
       }*/
    function Car(plate, kilometers, owner, tank) {
        this.plate = plate;
        this.kilometers = kilometers;
        this.owner = owner;
        this.tank = tank;
    }
    Car.prototype.start = function () {
        console.log('Starting engine');
    };
    Car.prototype.drive = function (distance) {
        console.log('Running distance ' + distance);
        var consumption = Math.round(Math.random() * distance);
        if (this.tank - consumption < 0) {
            this.tank = 0;
        }
        else {
            this.tank = this.tank - consumption;
        }
        return consumption;
    };
    return Car;
}());
var oneCar = new Car('0747BNG', 0, 'Eugene Krabs', 40);
oneCar.start();
console.log(oneCar.drive(5));
