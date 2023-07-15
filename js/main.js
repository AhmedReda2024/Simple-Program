/*
START ASSIGNMENT TWO JS
*/
var quote = [
  " “Be yourself; everyone else is already taken.” ",
  " “So many books, so little time.” ",
  " “Be the change that you wish to see in the world.” ",
  " “You only live once, but if you do it right, once is enough.” ",
  " “If you tell the truth, you don't have to remember anything.” ",
  " “A friend is someone who knows all about you and still loves you.” ",
  " “In three words I can sum up everything I've learned about life: it goes on.” ",
  " “We accept the love we think we deserve.” ",
];

var author = [
  "--Oscar Wilde",
  "--Frank Zappa",
  "--Mahatma Gandhi",
  "--Mae West",
  "--Mark Twain",
  "--Elbert Hubbard ",
  "--Robert Frost",
  "--Stephen Chbosky",
];

var usedQuotes = [];

function RandomQuotes() {
  var authorQuotes = Math.floor(Math.random() * author.length); //3

  if (usedQuotes.length === author.length) {
    usedQuotes = [];
  }

  while (usedQuotes.includes(authorQuotes)) {
    authorQuotes = Math.floor(Math.random() * author.length);
  }

  usedQuotes.push(authorQuotes);

  document.getElementById("demo").innerHTML = quote[authorQuotes];
  document.getElementById("text").innerHTML = author[authorQuotes];
}

// RandomQuotes();
