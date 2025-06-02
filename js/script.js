fetch('content.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const ids = ['vroom', 'lumitag', 'chapter2'];
    ids.forEach(id => {
      const sourceParagraph = doc.getElementById(id);
      const targetDiv = document.getElementById(id);
      if (sourceParagraph && targetDiv) {
        targetDiv.innerHTML = sourceParagraph.innerHTML;
      }
    });
  })
  .catch(error => console.error('Error loading content:', error));
