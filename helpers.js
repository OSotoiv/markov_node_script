//usage is used a general error handing response
function usage() {
    console.error('Usage: node makeText.js [TYPE] [PATH]');
    console.error('TYPE: "url" or "file"');
    console.error('PATH: "https://" or ./file/path.txt');
}

module.exports = { usage }