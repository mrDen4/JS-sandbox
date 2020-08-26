class Vehicle(speed, enginePower) {
  this.speed = speed;
  this.enginePower = enginePower;
}

function Car(speed, enginePower, driveUnit, bodyType) {
  Vehicle.apply(this, arguments);
  this.driveUnit = driveUnit;
  this.bodyType = bodyType;
}

function Plane(speed, rangeOfFlight, maxFlightAltitude) {
  Vehicle.apply(this, arguments);
  this.rangeOfFlight = rangeOfFlight;
  this.maxFlightaltitude = maxFlightAltitude;
}

function Ship(speed, enginePower, wayToTravel, propulsionType) {
  Vehicle.apply(this, arguments);
  this.wayToTravel = wayToTravel;
  this.propulsionType = propulsionType;
}

const LamborginiHuracan = new Car('325 km/h', '610 h.p.', 'full', 'sport car');
const AirBusA310 = new Plane('854 km/h', '12000 km', '11000 m');
const PV300VD = new Ship('22,5 km/h', '3 х 1000 kVt', 'cruise', 'surface');