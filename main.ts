basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (input.acceleration(Dimension.Y) > -100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -100) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (input.acceleration(Dimension.X) > 100) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
