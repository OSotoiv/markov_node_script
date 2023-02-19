# Markov Machine
Markov Machine is a simple program that generates random text using a Markov Chain algorithm.

### Requirements:
* Node.js version 12 or higher
* npm (Node.js package manager)
### Install package.json:
```
 npm init
```
### Usage run:
```
    node makeText.js [TYPE] [PATH]');
```
```
    TYPE: "url" or "file"'
    PATH: can be a url https:// or a file ./file/path.txt

```

 ### In Node REPL try this:
 ```
 const { MarkovMachine } = require('./markov');
 ```
 ```
 const mm = new MarkovMachine("the cat in the hat")
 ```
 ```
 console.dir(mm)
 ```
 Should return 
 ```
 MarkovMachine {
  words: [ 'the', 'cat', 'in', 'the', 'hat' ],
  chains: {
    the: [ 'cat', 'hat' ],
    cat: [ 'in' ],
    in: [ 'the' ],
    hat: [ null ]
  }
}
 ```
 Try
 ```
 mm.makeText()
 ```
 #### What did you get back?:
 ```
'the hat'
 ```

 #### Try with your own .txt files... 