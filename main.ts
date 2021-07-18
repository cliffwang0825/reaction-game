let ready = false
input.onPinPressed(TouchPin.P0, function () {
    if (ready == true) {
        ready = false
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.pause(100)
    basic.showString("2")
    basic.pause(100)
    basic.showString("1")
    basic.pause(100)
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    ready = true
    basic.showIcon(IconNames.Heart)
})
input.onPinPressed(TouchPin.P2, function () {
    if (ready == true) {
        ready = false
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
