input.onGesture(Gesture.Shake, function () {
    let list: number[] = []
    basic.showString("" + (text_list.removeAt(randint(0, list.length - 1))))
})
let text_list: string[] = []
text_list = ["Fun with French", "Helping the Elderly", "The Whale Radar", "Alarm system"]
