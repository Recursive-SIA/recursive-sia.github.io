document.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelector('h1').textContent.split('');
  const header = document.querySelector('h1');
  
  header.innerHTML = '';
  
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = '0';
    span.style.transition = 'opacity 0.5s ease';
    span.style.display = 'inline-block';
    
    header.appendChild(span);
    
    setTimeout(() => {
      span.style.opacity = '1';
    }, 100 * index);
  });
});