export default {
    async fetch(request) {
      const quotes = [
        "Life is what happens when you're busy making other plans.",
        "The purpose of our lives is to be happy.111111",
        "Get busy living or get busy dying5555.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you."
      ];
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // 创建响应头
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
        'Access-Control-Max-Age': '86400',
      });

      // 处理 OPTIONS 请求
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers });
      }
      
      // 返回带有 CORS 头的响应
      return new Response(JSON.stringify({ quote: randomQuote }), { headers });
    }
  };