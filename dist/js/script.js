window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          mobileMenu = document.querySelector('.promo__mobile-menu');
    

    // Open and closing of mobile menu
    hamburger.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active');
    })
})