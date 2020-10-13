function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

// as functions are invoke, they're added to the TOP of the stack
// and they're popped off one at a time from TOP
// CALL STACK
    // takeShower // 'Showering!'
    // cookFood // 'Oatmeal'
    // eatBreaskfast // 'Eating Oatmeal'
    // wakeUp //'Ok ready to go to work!'
