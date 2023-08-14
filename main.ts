controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Personaje, 0, -100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Personaje, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let Enemigo: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let Personaje: Sprite = null
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffefefefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1ffffffffffffffffffffffffffffffffffffefeeeffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1fffffffffffffffffffffffeeeeeeeeffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffefefefffffffff1ffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeefeeffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffeefffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffefeefffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffffffffffff
    fffffffffffffffffffffffffff1fffffffffffffffffffffefeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffff99d99bbbbbcffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffefeffffffffffffffffffff999ddbbbd66888111ccccccb99ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1fff
    ffffffffffffffffffffffffffffffffffffffffffefefffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffff444ddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff44ffff4444b6dbd68888888888888888cccccc99ffffffffffffffffffffffffffffffff1ffffffffffff1fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffff44446dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff444ffffff4444468866888888cccccccccccccccccc69ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffeeffffff4f44fffffff444446888888888ccccbbbcc8bcccccccccc9ffffffffffffffffffff1fffff1ffff1fffffffffffffffffff1fffffff
    fffff1ffffffffffffffffffffffffffffffffffffffeeeefffff4fffffffffffff444f8888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffeeefff4fffffffffffffff4448888888bccb888888bbbbb88888bcccccffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffeefefff4fff44ff44ffffff444888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffefffffffefee4ffffff44ff44ffffff444888688bbcb888888888bc888bcc8bc886c9ffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffeeeffffffefff4f44ff4ff4ffffffff4444488888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffeeeefffffff4ffff4fffff44ffffff44448848888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffeeefffffffff4fff4fffffffffffff444488848888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffff1fffff
    fffffffffffffffffffffffffffffffffffefeefffffffff4f4fffffffffffffff444488848bddddddbdbbddcccccd88b8ebccbbbbc9fffffffffffffff1ffffffffffffff1fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffefee4ffff4ff4ffffffffffffffffff444444488bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffeeffffff4ffffffffffff444ffffff444448bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffff1fffffffffffffffff
    fffffffffffff1fffffffffffffffffffffffffffffffffffffffffff44f44fff4444444bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1fffffffffffffffffffffffffffffffffffffffffffffffffff44ffffff444468bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6fffffffffffffffffffffff1ffffffffffffffffffffffffff
    f1fff1fffffffffffffffffffffffffffffffffffffffffff4fffffff44ffffff444444bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff44ffffffffffffffff4fffff4444468bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866ffffffffffffffffffffffffffffffffffffff1ffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff44ffffffff4ffffffff4444468bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffff44444468bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffff44444868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffeefffffffff4f4fff4ffff444444888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffff1ffff1ffffff
    ffffffffffffffffffffffffffffffffffffffffeefffffffff4f4f4f4ffff444444888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffff1fffffffff1fffffffffff
    fffffffffffffffffffffffffffffffffffffffefefffff444f4f4ffffffff4444446888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff4ffeeefffffffff4f4fffffff44444486888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886ffffffffffffffffffffffffffffffffffffffffff1ffff
    fffffffffffffffffffffffffffffffffffffffefee4ff4ffffff4fffffff444444868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869fffffffffffffff1ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffeeeef4fffff4fffffffff444444886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffff1ffffffffffffffffffffffffffff1ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff44ffffffff44444448888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffff1fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff4c4ffffffff4444444888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffff1fffff
    fffffffffffffffff1ffffffffffffffffffffff4ffff444444fffffff444444448886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4fffffffffff44444468888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffff1fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff4fffffff4ffffff44444488888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffff1fffffffffffffffffffffffffffffff1fffff
    ffff1fffffffffffffffffffffffffffff4fff4ff4fffffffff4fffff444444488866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff4ffffffff4fffff44444448888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff44fffffff4f4fff44444444448888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff4fffffffff4fff4444444444888888888888888888888bbbbccccccccccc88888888869fffffffffffffffffffffffffffffff1ffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffff4ffffff4ffff44444444448888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff4ffff4f4fffffff4ffff4ffff44444444448888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffff1fffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffff4ffff4ffff44444444448888888888888888888888bbbbcbcccccccc88888888886ffffffffffffffffff1ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44fff4fff444444444488888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4ff4fffff444444444488688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff4ffff4f4f4f444444444688688888888888888888888bbbbcccccccc88888dd88886ffffffffff1fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff4ffffff4ffff4fff4f444444666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffff1fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff4ffffff44f44444b668888888868888888888888888bbbcccccccc8888bbd888869fffffffffffffffffffffffffffffffffffffffff1ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff44444444bbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffff1fff
    ffffffffffffffffffff1ffffffffffffffffffffffffffff4f4444444466bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffff1fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff44444444466dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff44444444446666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff444444444446666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffff1fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff4fff44444444444666666dbb8868888688888888888888bbbccc8888888889b69ffffffffffffffffffffffffffffffffffffff1fffff1ffffff
    ffffffffffffffffffffffffffffffffffffffff4fff4fff444444444444666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff4444444444466666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff4494444444466666666dbb6888668888888888888888888888888888869ffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffff1fffffffffffffffffffffffffffffffffffffffff44469ccb4444466666666dbb88866888888888888888888888888888869fffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffff1ffffffffffffffffffffffffffffffffffffffff444969ccc4694666666666dd8888668888888888888888888888888866ffffffffffffffffffffffff11fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffffff44ff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1ffffffffffffffffffffffff44fff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff1ffff4fffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4ffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1fffffffffff4fffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4ffffffff9966966966666666886888888888888886888888669fffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffff1ffffffffffff1ffffffffffffffffffffffff1fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
    ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    ffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff1ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1fffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Personaje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 2 1 2 . . . . . . . 
    . . . . . . 2 1 2 . . . . . . . 
    2 . . . . . 1 1 1 . . . . . 2 . 
    2 . . . . 1 1 1 1 1 . . . . 2 . 
    1 . . . . 1 1 1 1 1 . . . . 1 . 
    1 . . . 1 1 1 1 1 1 1 . . . 1 . 
    1 . . 1 1 1 1 6 1 1 1 1 . . 1 . 
    1 1 1 1 1 1 6 6 6 1 1 1 1 1 1 . 
    . . . 1 1 6 6 6 6 6 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
Personaje.setStayInScreen(true)
info.setLife(3)
Personaje.setPosition(74, 81)
controller.moveSprite(Personaje)
info.setScore(0)
game.onUpdateInterval(500, function () {
    Enemigo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . e e e e e e e e f e e . 
        . . e e e f e e e e f f f f f . 
        . . e e e f e e e f f f f f f e 
        . e e e e e e e e f f f f f e e 
        . e e f f f e e e e f f e e e e 
        . e e f f f e e e e e e e e e e 
        . e e e e e f f f f f e e e e e 
        . e e e e e e e e e e e e e e . 
        . e f f e e e e e e e e e e e . 
        . e e f f f f e e e e e e e e . 
        . . e f f f f f e e e e e e . . 
        . . . e e f f e e e e e e . . . 
        . . . . . . e e e e e . . . . . 
        `, SpriteKind.Enemy)
    Enemigo.setVelocity(0, 50)
    Enemigo.setPosition(randint(0, 200), 0)
})
