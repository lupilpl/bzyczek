input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
