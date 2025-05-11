function showPopup(source, quadrantClass) {
  const quotes = {
    hassabis: `“If we went forward 10 years in time, I think the optimistic view of it will be, we’ll be in this world of maximum human flourishing, traveling the stars, with all the technologies that AI will help bring about.” — <a href='https://time.com/7280740/demis-hassabis-interview/' target='_blank'>Demis Hassabis (2025)</a>`,

    benjamin: `“These tech advances are sold as morally superior because they purport to rise above human bias, even though they could not exist without data produced through histories of exclusion and discrimination.” — <a href='https://www.ruhabenjamin.com/race-after-technology' target='_blank'>Ruha Benjamin (2019)</a>`,

    hawking: `“The development of full artificial intelligence could spell the end of the human race… It would take off on its own, and re-design itself at an ever increasing rate. Humans, who are limited by slow biological evolution, couldn’t compete, and would be superseded.” — <a href='https://www.bbc.com/news/technology-30290540' target='_blank'>Stephen Hawking (2014)</a>`,

    musk: `“If you want to do a job that’s kinda like a hobby, you can do a job... But otherwise, AI and the robots will provide any goods and services that you want.” — <a href='https://www.cnn.com/2024/05/23/tech/elon-musk-ai-your-job/index.html' target='_blank'>Elon Musk (2024)</a>`
  };

  // Set quote
  document.getElementById('quote-text').innerHTML = quotes[source];

  // Reset background class
  const content = document.getElementById('popup-content');
  content.className = 'popup-content'; // reset base class
  content.classList.add(quadrantClass); // apply new background

  // Show popup
  document.getElementById('popup-box').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-box').style.display = 'none';
}

// Click-outside to close
function outsideClick(event) {
  if (!event.target.closest('.popup-content')) {
    closePopup();
  }
}
