function lights () {
	
}
input.onGesture(Gesture.Shake, function () {
    makerController.player2.setButton(ArcadeButton.Down, true)
})
forever(function () {
    while (!(input.switchRight())) {
        if (input.buttonA.isPressed()) {
            makerController.player1.setButton(ArcadeButton.A, true)
        } else if (input.buttonB.isPressed()) {
            makerController.player1.setButton(ArcadeButton.B, true)
        } else if (!(input.buttonA.isPressed())) {
            makerController.player1.setButton(ArcadeButton.A, false)
        } else if (!(input.buttonB.isPressed())) {
            makerController.player1.setButton(ArcadeButton.B, false)
        }
    }
    while (input.switchRight()) {
        makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    }
})
