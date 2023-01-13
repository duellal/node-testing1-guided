// Build a Car class!
module.exports = class car {
    constructor(make, model){
        this.make = make
        this.model = model
        this.odometer = 0 
    }

    drive(distance){
        this.odometer += distance
    }

    async driveAsync(distance){
        this.odometer += distance
        return this.odometer
    }
}