// Fetches a new quote from the API
async function fetchQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quote = data.content;
    const author = data.author;
    return { quote, author };
  }
  
  // Displays the quote of the day in the UI
  async function displayQuote() {
    const quoteTextElement = document.querySelector('#quote-text');
    const quoteAuthorElement = document.querySelector('#quote-author');
    const quote = await fetchQuote();
    quoteTextElement.textContent = `"${quote.quote}"`;
    quoteAuthorElement.textContent = `- ${quote.author}`;
  }
  
  // Initializes the popup when the DOM is ready
  document.addEventListener('DOMContentLoaded', async () => {
    await displayQuote();
  
    const newQuoteButton = document.querySelector('#new-quote-button');
    newQuoteButton.addEventListener('click', () => {
      displayQuote();
    });
  });
  