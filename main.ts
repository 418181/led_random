let list: number[] = []
let n = 0
let 燈數 = 0
let a = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < 燈數) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈號(a + 1)
        }
    }
})
function 燈號 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5 - 1)
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.AB, function () {
    燈數 += -1
    if (燈數 < 0) {
        燈數 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    燈數 += 1
    if (燈數 > 25) {
        燈數 = 25
    }
})
basic.forever(function () {
	
})
