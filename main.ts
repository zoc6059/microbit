input.onButtonPressed(Button.A, function () {
    自己.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(自己.get(LedSpriteProperty.X), 自己.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
    }
    if (子彈.isTouching(敵人)) {
        game.addScore(1)
    }
    子彈.delete()
})
input.onButtonPressed(Button.B, function () {
    自己.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.EightG, function () {
    game.gameOver()
})
let 子彈2: game.LedSprite = null
let 射擊概率 = 0
let 子彈: game.LedSprite = null
let 敵人: game.LedSprite = null
let 自己: game.LedSprite = null
自己 = game.createSprite(2, 4)
敵人 = game.createSprite(randint(0, 4), 0)
game.setLife(5)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        自己.turn(Direction.Right, 45)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        自己.turn(Direction.Left, 45)
    }
})
basic.forever(function () {
    敵人.change(LedSpriteProperty.X, randint(-1, 1))
    basic.pause(100)
})
basic.forever(function () {
    射擊概率 = randint(1, 2)
    if (射擊概率 == 1) {
        子彈2 = game.createSprite(敵人.get(LedSpriteProperty.X), 敵人.get(LedSpriteProperty.Y))
        for (let index = 0; index < 4; index++) {
            子彈2.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (子彈2.isTouching(自己)) {
            game.removeLife(1)
        }
        子彈2.delete()
    }
    basic.pause(400)
})
