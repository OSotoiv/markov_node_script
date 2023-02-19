const { MarkovMachine } = require('../markov');


test('MarkovMachine class should have .words .chains .makeText()', () => {
    const mm = new MarkovMachine("the cat in the hat");
    expect(mm.words).toEqual(['the', 'cat', 'in', 'the', 'hat']);
    expect(mm.chains).toEqual({ the: ['cat', 'hat'], cat: ['in'], in: ['the'], hat: [null] })
})