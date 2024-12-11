document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('botao');
    const sidebar = document.querySelector('.barra-sanduiche');
  
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
