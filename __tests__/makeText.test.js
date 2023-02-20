const { markovFromFILE, markovFromURL } = require('../makeText');

test('should console out Markov from File', () => {
    const filepath = 'eggs.txt'
    const consoleSpy = jest.spyOn(console, 'log');
    markovFromFILE(filepath)
    expect(consoleSpy).toHaveBeenCalled()
})
// ????WHY IS MY TEST RUNNING makeText.js FILE????
// >>>I ONLY WANT THE markovFromFILE() TO RUN<<<

// myname@myname-PC:~/PERN/node-markov$ jest
//  PASS  __tests__/markov.test.js
//   ●  process.exit called with "1"

//       13 | if (!INPUT.includes(IOtype) || !readFILE) {
//       14 |     usage()
//     > 15 |     process.exit(1)
//          |             ^
//       16 | }
//       17 | if (IOtype === 'url') {
//       18 |     markovFromURL(readFILE);

//       at Object.exit (makeText.js:15:13)
//       at Object.require (__tests__/makeText.test.js:1:43)

//  RUNS  __tests__/makeText.test.js
