const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err)
        console.error(err);

    // read in data until the first carriage return + new line (windows)
    let sequence = data.substr(0, data.indexOf("\r\n"))
    // read in data from first carriage return + new line until the end
    let boards = data.substr(data.indexOf("\r\n"), data.length)

    // We need to split the boards into 5x5 arrays

    boards = boards.split(/[\r\n]/);

    boards = boards.filter(a => a != '')

    // Here we have array of length 500, each with 5 numbers in it seperated by spaces
    // How can we split this array into 100 arrays with 5 arrays in it?

    let gameBoards = []
    let tempBoards = []
    boards.forEach(item => {
        if (tempBoards.length > 4) {
            gameBoards.push(tempBoards)
            tempBoards = []
        }
        tempBoards.push(item.split(/\s+/))
    });

    console.log(gameBoards);

    gameBoards.some(board, index => {
        
        board.forEach(row => {
            let rowMatch = 0
            row.forEach(element, index => {
                if (element.contains('p')) {
                    rowMatch++
                }
            })

            if (rowMatch === 5) {
                
            }
        })
    })
})