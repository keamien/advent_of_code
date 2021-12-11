const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) 
        console.error(err)

    let compSets = []
    data.split("\r\n").forEach(item => {
        item.split("").forEach( (digit, index) => {
            if (typeof compSets[index] === 'undefined') {
                compSets[index] = new Map()
                compSets[index].set('0', 0)
                compSets[index].set('1', 0)
            }
            if (parseInt(digit) === 0) {
                compSets[index].set('0', compSets[index].get('0')+1)
            } else {
                compSets[index].set('1', compSets[index].get('1')+1)
            }
        })
    });

    let gamma = ""
    let epsilon = ""
    compSets.forEach(item => {
        if (item.get('0') > item.get('1')) {
            gamma += '0'
            epsilon += '1'
        } else {
            gamma += '1'
            epsilon += '0'
        }
        
    })

    console.log("~~~part 1~~~");
    console.log("gamma", gamma);
    console.log("epsilon", epsilon)
    console.log("power consumption", parseInt(gamma, 2) * parseInt(epsilon, 2));
    console.log("~~~part 2~~~");

 
    let input = data.split("\r\n")

    let oxygen = recurse(input, 0)
    let co2 = recurse(input, 0, "co2")
    console.log(oxygen, co2)
    console.log("power consumption", parseInt(oxygen, 2) * parseInt(co2, 2));
    
})

const recurse = (array_to_be_filtered, index, co2) => {
        if (array_to_be_filtered.length ===  1) {
            return array_to_be_filtered
        }
        // determine the bit criteria
        let num1 = 0
        let num0 = 0
        array_to_be_filtered.forEach(item => {
            if (parseInt(item.split("")[index]) === 1) {
                num1++
            } else {
                num0++
            }
        })

        let bitCriteria
        if (co2) {
            bitCriteria = (num1 >= num0) ? 0 : 1
        } else {
            bitCriteria = (num1 >= num0) ? 1 : 0
        }

       return recurse(array_to_be_filtered.filter(item => parseInt(item.split("")[index]) === bitCriteria),++index, co2)
    }