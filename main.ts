enum RadioMessage {
    message1 = 49434
}
let themistor0 = 0
input.onPinPressed(TouchPin.P0, function () {
    themistor0 = 1
    for (let index = 0; index < 99999999; index++) {
        basic.showLeds(`
            . # . . .
            . # # . #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1990)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(10)
        for (let index = 0; index < 3; index++) {
            basic.showNumber(input.temperature())
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 36)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    radio.setGroup(72)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    for (let index = 0; index < 4; index++) {
        basic.showString("SAFE")
    }
    basic.pause(50)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
