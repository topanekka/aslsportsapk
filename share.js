
  document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>ASL Sports App</title>

      <!-- Open Graph Meta Tags for Sharing -->
      <meta property="og:title" content="ASL Sports App - Watch Live Cricket Free!">
      <meta property="og:description" content="Watch live India cricket matches, get team updates and more – Download ASL Sports App now!">
      <meta property="og:image" content="https://iili.io/FzJJ7Hb.md.jpg">
      <meta property="og:url" content="https://asl-sports-apk.netlify.app/">
      <meta property="og:type" content="website">

      <!-- Font Awesome for Share Icon -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

      <style>
        .universal-share {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          padding: 14px 24px;
          font-size: 18px;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(18, 140, 126, 0.4);
          cursor: pointer;
        }

        .universal-share i {
          font-size: 22px;
          margin-right: 12px;
        }

        .universal-share:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 14px rgba(18, 140, 126, 0.5);
          background: linear-gradient(135deg, #128C7E, #075E54);
        }
      </style>
    </head>

    <body>
      <center>
        <button class="universal-share" onclick="shareApp()">
          <i class="fas fa-share-alt"></i> Share This App
        </button>
      </center>

      <script>
        function shareApp() {
          const shareData = {
            title: 'ASL Sports App',
            text: 'Watch live India cricket matches, get team updates and more – Download ASL Sports App now!',
            url: 'https://asl-sports-apk.netlify.app/'
          };

          if (navigator.share) {
            navigator.share(shareData)
              .then(() => console.log('App shared successfully!'))
              .catch((err) => console.error('Error sharing:', err));
          } else {
            alert("Sharing not supported on this browser. Please copy the link manually.");
          }
        }
      </script>
    </body>
    </html>
  `);
