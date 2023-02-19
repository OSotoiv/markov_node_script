/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    // this calls makeChains method
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    //TODO
    // this sets chains to be an object filled with {word: [nextWord]}
    this.chains = this.words.reduce((chains, word, i) => {
      //if you go past the words array words[i+1] == undefined
      //their should only be one null to mark the last word.
      const nextWord = this.words[i + 1] || null;
      if (chains[word]) {
        chains[word].push(nextWord);
      } else {
        chains[word] = [nextWord];
      }
      return chains;
    }, {});
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    // const keys = Object.keys(this.chains);
    let result = [];

    // init starting word from this.words array
    let currWord = this.words[Math.floor(Math.random() * this.words.length)]

    for (let i = 0; i < numWords; i++) {
      //push first word to results and every next word !== null
      result.push(currWord);
      //get array of words that can come after current word
      const nextWords = this.chains[currWord];
      //set current word to a random word form the nextWords array
      currWord = nextWords[Math.floor(Math.random() * nextWords.length)];
      if (currWord === null) {
        break; //because no word can come after null and the last word can end a sentence. 
      }
    }
    //join the results array of words on a space as a new string.
    return result.join(' ');
  }

}
module.exports = { MarkovMachine };