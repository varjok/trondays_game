input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.setButton(ArcadeButton.A, true)
    light.showRing(
    `blue purple blue purple blue black black black black black`
    )
})
input.onGesture(Gesture.Shake, function () {
    makerController.player2.setButton(ArcadeButton.Down, true)
})
music.powerUp.play()
light.showRing(
`green green green green green green green green green green`
)
forever(function () {
    while (input.switchRight()) {
        if (input.buttonA.isPressed()) {
        	
        } else if (input.buttonB.isPressed()) {
            makerController.player1.setButton(ArcadeButton.B, true)
            light.showRing(
            `black black black black black pink white pink white pink`
            )
        } else if (!(input.buttonA.isPressed())) {
            makerController.player1.setButton(ArcadeButton.A, false)
        } else if (!(input.buttonB.isPressed())) {
            makerController.player1.setButton(ArcadeButton.B, false)
        }
    }
    while (!(input.switchRight())) {
        makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    }
})
