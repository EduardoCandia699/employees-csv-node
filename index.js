const fs = require('fs')
const args = process.argv.slice(2)
fs.readFile(args[0], 'utf8', function(err, data) {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log(data)
})

