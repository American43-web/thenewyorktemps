// Example of basic interactivity with JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('.article');
  
    articles.forEach(article => {
      article.addEventListener('click', function() {
        alert('Article clicked: ' + this.querySelector('h3').textContent);
      });
    });
  });
  