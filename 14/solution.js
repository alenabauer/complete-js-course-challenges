const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // 1. Create a method called 'registerNewAnswer' on the 'poll' object.
  registerNewAnswer() {
    const prompt = `${this.question}\n${this.options.join('\n')}`;
    const input = prompt(prompt);
    // Based on the input number, update the 'answers' array property.
    if (input < this.answers.length) this.answers[input]++;
    displayResults('string');
  },
  // Create a method 'displayResults' which displays the poll results. The
  // method takes a string as an input (called 'type'), which can be either 'string'
  // or 'array'. If type is 'array', simply display the results array as it is, using
  // console.log(). This should be the default option. If type is 'string', display a
  // string like "Poll results are 13, 2, 4, 1"
  displayResults (type = 'array') {
    type === 'string' ? console.log(`Poll results are ${this.answers.join(', ')}`) : console.log(this.answers);
  }
};

  // Call the registerNewAnswer method whenever the user clicks the "Answer poll" button
document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer.bind(poll));
