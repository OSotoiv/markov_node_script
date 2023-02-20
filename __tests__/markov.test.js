const { MarkovMachine } = require('../markov');


test('MarkovMachine class should have .words .chains .makeText()', () => {
    const mm = new MarkovMachine("the cat in the hat");
    expect(mm.words).toEqual(['the', 'cat', 'in', 'the', 'hat']);
    expect(mm.chains).toEqual({
        the: ['cat', 'hat'],
        cat: ['in'],
        in: ['the'],
        hat: [null]
    })
    // mm.makeText should not return a string with any regex of invalid sequence
    const regsOfInvalidSequence = [/the in/, /cat the/, /hat the/, /the$/, /in$/, /cat$/];
    for (let reg of regsOfInvalidSequence) {
        expect(mm.makeText()).toEqual(expect.not.stringMatching(reg));
    }
})
//link to reference of expecting sting not toEqual regex
//https://jestjs.io/docs/expect#expectstringmatchingstring--regexp