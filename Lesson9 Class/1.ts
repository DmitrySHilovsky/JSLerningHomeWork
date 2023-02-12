// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
// Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
// Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
// Выводящий текст должен быть таким: This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>.
// Approximetly cost of the car is <carCost>. 
// (В задании используйте не только public модификатор, где это возможно)


class Car {
    public brand: string
    public typeEngine: string
    constructor(carName:string, engineType:string) {
        this.brand = carName;
        this.typeEngine = engineType;
    }

    getCarInfo() {
        return `This is ${this.brand}. It has ${this.typeEngine} engine`;
    }
}


class SportCar extends Car {
    private maxSpeed: number;
    private carCost: number;
    constructor(carName:string, engineType:string, maxSpeed:number, carCost:number) {
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }

    getCarInfo() {
        return `${super.getCarInfo()} and max speed equal to ${this.maxSpeed}. cost: ${this.carCost}`;
    }
}

class LuxuryCar extends SportCar {
    constructor(carName:string, engineType:string, maxSpeed:number, carCost:number) {
        super(carName, engineType, maxSpeed, carCost);
    }
}


const cuperCar = new SportCar('BMW', 'Diesel', 200, 5000);
console.log(cuperCar.getCarInfo());

const luxMobil = new LuxuryCar('Audi', 'Petrol', 180, 4000);
console.log(luxMobil.getCarInfo());