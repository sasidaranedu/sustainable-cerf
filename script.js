const accs = document.querySelectorAll('.faq');

accs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
