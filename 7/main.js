class Vehicle {
  constructor(speed, enginePower) {
    this.speed = speed;
    this.enginePower = enginePower;
  }
}

class Car extends Vehicle {
  constructor(speed, enginePower, driveUnit, bodyType) {
    super(speed, enginePower);
    this.driveUnit = driveUnit;
    this.bodyType = bodyType;
  }
}

class Plane extends Vehicle {
  constructor(speed, rangeOfFlight, maxFlightAltitude) {
    super(speed);
    this.rangeOfFlight = rangeOfFlight;
    this.maxFlightaltitude = maxFlightAltitude;
  }
}

class Ship extends Vehicle {
  constructor(speed, enginePower, wayToTravel, propulsionType) {
    super(speed, enginePower);
    this.wayToTravel = wayToTravel;
    this.propulsionType = propulsionType;
  }
}

const LamborginiHuracan = new Car('325 km/h', '610 h.p.', 'full', 'sport car');
const AirBusA310 = new Plane('854 km/h', '12000 km', '11000 m');
const PV300VD = new Ship('22,5 km/h', '3 х 1000 kVt', 'cruise', 'surface');

console.log(LamborginiHuracan, AirBusA310, PV300VD);