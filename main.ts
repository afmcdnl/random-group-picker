input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (text_list.removeAt(randint(0, text_list.length - 1))))
})
let text_list: string[] = []
text_list = ["Fun with French", "Helping the Elderly", "The Whale Radar", "Alarm system"]
