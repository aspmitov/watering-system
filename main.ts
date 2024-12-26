input.onButtonPressed(Button.A, function () {
    mode = 0
    pins.analogWritePin(AnalogPin.P0, 700)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    mode = 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    mode = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
let mode = 0
mode = 1
pins.analogWritePin(AnalogPin.P0, 0)
// >2.1 wet
// >1.8 moist
// <1.8 dry
let moisture_level = 1.8
basic.forever(function () {
    if (mode == 1) {
        while (pins.map(
        pins.analogReadPin(AnalogReadWritePin.P2),
        0,
        1023,
        0,
        3.3
        ) >= moisture_level && mode == 1) {
            pins.analogWritePin(AnalogPin.P0, 700)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
        }
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(2000)
    }
})
