/** Command-line tool to generate Markov text. */
const fs = require('fs');
const http = require('http');
const https = require('https');
const { URL } = require('url');
const axios = require('axios');
const { MarkovMachine } = require('./markov');
const { usage } = require('./helpers')

const INPUT = ['url', 'file']
const [IOtype, readFILE] = process.argv.slice(2);

if (!INPUT.includes(IOtype) || !readFILE) {
    usage()
    process.exit(1)
}
if (IOtype === 'url') {
    markovFromURL(readFILE);
} else if (IOtype === 'file') {
    markovFromFILE(readFILE)
} else {
    console.error('something else is wrong')
    process.exit(2)
}


async function markovFromURL(url) {
    try {
        const { data } = await axios.get(url);
        if (!data) throw new Error('URL return no data!')
        const mm = new MarkovMachine(data);
        console.log(mm.makeText());
        process.exit(0);

    } catch (error) {
        console.error('<<<ERROR>>>');
        console.error(error.message)
        usage()
        process.exit(3)
    }
}

function markovFromFILE(filePath) {
    // Check if the file exists
    try {
        fs.accessSync(filePath, fs.constants.F_OK)
        // If the file exists, make new MarkovMachine
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                process.exit(4);
            }
            const mm = new MarkovMachine(data);
            console.log(mm.makeText());
            process.exit(0);
        })

    } catch (err) {
        console.error(err.message);
        usage()
        process.exit(4)
    }
}

module.exports = { markovFromFILE, markovFromURL }