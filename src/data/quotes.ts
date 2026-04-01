export type Quote = {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Successful people work hard and call it luck, while others whines over it.",
    author: "Saad Haider",
  },
  {
    text: "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
    author: "Eren Yeager",
  },
  {
    text: "As long as I am alive, there are infinite chances.",
    author: "Monkey D. Luffy",
  },
  {
    text: "It doesn't matter how it's done, what needs to be sacrificed. In this world, winning is everything.",
    author: "Kiyotaka Ayanokoji",
  },
  {
    text: "Are you where you want to be? If not, then take your fkn ass off and get back to work.",
    author: "Unknown",
  },
  {
    text: "Kyun darein zindagi mein kya hoga? Kuch na hoga toh tazurba hoga.",
    author: "Javed Akhtar",
  }
];


export const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
