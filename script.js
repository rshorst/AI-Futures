function showQuote(id) {
  const quotes = document.querySelectorAll('.quote-box');
  quotes.forEach(q => q.classList.remove('active'));
  
  document.getElementById(id).classList.add('active');
}