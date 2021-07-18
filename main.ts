input.onPinPressed(TouchPin.P2, function () {
    if (game_started == true) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        game_started = false
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (game_started == true) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        game_started = false
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let game_started = false
game_started = false
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("3")
        basic.pause(100)
        basic.showString("2")
        basic.pause(100)
        basic.showString("1")
        basic.pause(100)
        basic.clearScreen()
        game_started = true
        basic.pause(randint(1000, 5000))
        basic.showIcon(IconNames.Heart)
        basic.pause(50)
        basic.clearScreen()
    }
})
