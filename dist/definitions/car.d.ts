declare class Car {
    plate: string;
    protected kilometers: number;
    private owner;
    private tank;
    constructor(plate: string, kilometers: number, owner: string, tank: number);
    start(): void;
    drive(distance: number): number;
}
declare var oneCar: Car;
