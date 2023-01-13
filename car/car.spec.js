const Car = require(`./car`)

function foo(){
    return 'foo'
}

// Test away!
describe('First tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBe(3+2)
        expect(5).toBe(5*1)
        expect(5).toBeGreaterThan(3)
    })

    test('objects', () => {
        const o = {a: 1}
        const oo = {a: 1}
        const ooo = oo

        //.toBe() means strictly equal to
        expect(o).toBe(o)
        //These objects to the computer memory are not the same since they're truly the same object:
            // expect(o).toBe(oo)

        //These objects are the same since they're equal to each other in the computers memory:
        expect(oo).toBe(ooo)

        expect(o).toEqual(oo)
    })
})

describe('foo function', () => {
    test('foo returns foo', () => {
        expect(foo()).toBe('foo')
        expect(foo()).toHaveLength(3)
    })
})

describe('car class', () => {
    //beforeEach() can be placed at the top of the code or in each describe block - depending on what you need
    //beforeEach() lets you declare a variable at the start of each of the tests
        //instead of declaring a variable within each test
    let outback
    beforeEach(() => {
        outback = new Car('Subaru', 'Outback') 
    })

    test('car is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })

    test('has model and make', () => {
        expect(outback).toHaveProperty('model')
        expect(outback).toHaveProperty('make')
        expect(outback).toHaveProperty('model', 'Outback')
        expect(outback).toHaveProperty('make', 'Subaru')
        expect(outback.make).toBeDefined()
        expect(outback.model).toBeDefined()
        expect(outback.make).toBe('Subaru')
        expect(outback.model).toBe('Outback')
        expect(outback).toMatchObject({make: 'Subaru', model: 'Outback'})
    })
    
    test('new cars start with odometer at 0', () => {
        expect(outback).toHaveProperty('odometer', 0)
    })

    test('cars have a drive method', () => {
        expect(outback.drive).toBeDefined()
        expect(outback.drive).toBe(Car.prototype.drive)
    })

    test('drive method takes distance and increases odometer by that distance', () => {
        outback.drive(10)
        expect(outback.odometer).toBe(10)
        outback.drive(25)
        expect(outback.odometer).toBe(35)
    })

    //.todo() allows you to declare that you want to write this particular test, but does not make it a false positive or negative before you write it
        //Shows up in purple in the terminal Tests: failed, todo, passed, total
    test.todo('drive method returns updated odometer')

    //.only() skips over all other tests and ONLY tests the test you put it on
        //Shows up in yellow in the terminal Tests: failed, skipped, passed, total
    //.skip() skips over that particular test and tests all other tests
        //Also shows up in yellow

    test('driveAysnc method returns updated odometer', async () => {
        let updatedOdometer = await outback.driveAsync(9)

        expect(updatedOdometer).toBe(9)
        updatedOdometer = await outback.driveAsync(6)
        expect(updatedOdometer).toBe(15)
    })
    

})  