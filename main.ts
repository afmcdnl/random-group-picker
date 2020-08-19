// This project is to help us pick the final presentation order
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + text_list.removeAt(randint(0, text_list.length - 1)),50)
})
/**
 * basic.showString("Hello!", 50)
 */
let text_list : string[] = []
// text_list = ["Fun with French", "Helping the Elderly", "The Whale Radar", "Alarm system"]
text_list = ["Social", "Enviro", "Teacher", "Driving"]
