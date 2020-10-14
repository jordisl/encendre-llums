basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
