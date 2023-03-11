const myButton = document.getElementById('my-button');
myButton.addEventListener('click', () => {
  alert('You clicked the button!');
});
const dropdown = document.querySelector('.dropdown');
const dropdownContent = dropdown.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

dropdownContent.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    window.location.href = event.target.href;
  }
});

document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownContent.classList.remove('show');
  }
});
const productImages = document.querySelector('.product-images');
const mainImage = productImages
