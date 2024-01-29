const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // MÜcahit için özel HTML sayfası
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merhaba MÜcahit</title>
      <style>
        body {
          font-family: 'Verdana', sans-serif;
          background-color: #ffd700;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>Merhaba MÜcahit!</h1>
      <p>Hoş geldin, MÜcahit. Umarım harika bir gün geçirirsin!</p>
    </body>
    </html>
  `;

  res.end(html);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
