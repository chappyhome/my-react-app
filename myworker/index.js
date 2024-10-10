export default {
    async fetch(request) {
      const quotes = [
        "Life is what happens when you're busy making other plans.",
        "The purpose of our lives is to be happy.11111",
        "Get busy living or get busy dying5555.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you."
      ];
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      return new Response(JSON.stringify({ quote: randomQuote }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };