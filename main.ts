input.onButtonPressed(Button.A, function () {
    Alarmed = 0
    Alarm()
})
input.onButtonPressed(Button.B, function () {
    if (Alarmed == 0) {
        readlight = 1
    }
    if (readlight == 1) {
        lightvalue = input.lightLevel()
    }
    if (lightvalue > 100) {
        readlight = 0
        Alarmed = 1
        Alarm()
    }
})
function Alarm () {
    while (Alarmed == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
}
let lightvalue = 0
let readlight = 0
let Alarmed = 0
Alarmed = 1
readlight = 1
lightvalue = input.lightLevel()
if (lightvalue > 100) {
    readlight = 0
    Alarm()
}
