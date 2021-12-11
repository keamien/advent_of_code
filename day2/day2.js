// forward x
// down x (increases depth by x)
// up x (decreases depth by x)

const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    }

    let horizontal = 0
    let depth = 0
    let commands = data.toString().split("\r\n")
    commands.forEach(element => {
        command = element.split(" ")
        switch (command[0]) {
            case 'forward':
                horizontal += parseInt(command[1])
                break
            case 'down':
                depth += parseInt(command[1])
                break
            case 'up':
                depth -= parseInt(command[1])
                break;
        }
    });

    console.log("part 1");
    console.log("horizontal: ", horizontal)
    console.log("depth: ", depth);
    console.log("horizontal * depth = ", horizontal*depth)

    horizontal = 0
    depth = 0
    let aim = 0
    commands.forEach(element => {
        command = element.split(" ")
        switch (command[0]) {
            case 'forward':
                horizontal += parseInt(command[1])
                depth += parseInt(command[1]) * aim
                break
            case 'down':
                aim += parseInt(command[1])
                break
            case 'up':
                aim -= parseInt(command[1])
                break;
        }
    });

    console.log("part 2");
    console.log("horizontal: ", horizontal)
    console.log("depth: ", depth);
    console.log("horizontal * depth = ", horizontal*depth)

    
})