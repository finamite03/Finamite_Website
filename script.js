// Animation for service boxes on hover
document.querySelectorAll('.service-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  <!-- main.html -->
  <html>
  <head>
      <title>My Website</title>
  </head>
  <body>
      <h1>Welcome to My Website</h1>
  
      <div id="footer"></div> <!-- Footer placeholder -->
  
      <script>
          fetch('footer.html')
              .then(response => response.text())
              .then(data => {
                  document.getElementById('footer').innerHTML = data;
              });
      </script>
  </body>
  </html>
  