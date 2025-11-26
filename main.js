import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const searchButtons = document.querySelectorAll('.btn-primary');
  const searchInputs = document.querySelectorAll('input[type="text"]');

  searchButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const input = searchInputs[index];
      if (input && input.value.trim()) {
        console.log('Recherche pour:', input.value);
        alert(`Recherche des restaurants à: ${input.value}`);
      } else {
        alert('Veuillez entrer une adresse');
      }
    });
  });

  searchInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        console.log('Recherche pour:', input.value);
        alert(`Recherche des restaurants à: ${input.value}`);
      }
    });
  });

  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.querySelector('h3').textContent;
      alert(`Catégorie sélectionnée: ${category}`);
    });
  });

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      console.log('Navigation vers:', target);
    });
  });
})
