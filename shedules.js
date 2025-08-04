
document.write(`
  <style>
    .iframex {
      position: relative;
      width: 50px;
    }

    .iframey {
      position: absolute;
      top: -1270px;
      left: 10px;
      width: 360px;
      height: 3500px;
    }
  </style>

  <div class="iframex">
    <iframe 
      class="iframey"
      sandbox="allow-scripts allow-same-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      frameborder="0"
      scrolling="no"
      src="https://asiacup2025.net/asia-cup-schedule-2025/"
      width="100%"
      height="100%">
    </iframe>
  </div>
`);
