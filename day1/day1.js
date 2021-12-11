const fs = require('fs')

fs.readFile('C:\\Users\\jon.roach\\Documents\\advent_of_code\\day1\\input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    let inputs = data.toString().split("\n").map(x => parseInt(x))

    // part 1
    let count = 0
    inputs.forEach((item, index) => {
        if (index > 0 && item > inputs[index - 1])
            count += 1
    });
    console.log("Day 1 part 1", count)

    // part 2
    count = 0;
    inputs.forEach((item, index) => {
        let a = inputs.slice(index, index + 3).reduce((acc, elem) => acc + elem, 0)
        let b = inputs.slice(index + 1, index + 4).reduce((acc, elem) => acc + elem, 0)
        if (b > a) {
            count += 1
        }
    })
    console.log("Day 1 part 2", count)
})

