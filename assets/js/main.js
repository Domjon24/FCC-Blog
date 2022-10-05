// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong :( make sure ${selector} exists or is typed correctly`)
};
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('actvated')
    }else {
        headerElement.classList.remove('actvated')
    }
}
window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
};
menuToggleIcon.addEventListener('click', toggleMenu)
// Open/Close search form popup
 const formOpenBtn = selectElement("#search-icon-btn"); //this is wrong on vid. line 57 on index.html
 const formCloseBtn = selectElement("#form-close-btn");
 const searchFormContainer = selectElement("#search-form-container");

 formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add("activated"));
 formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove("activated"));
// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme');
// testtttt
if(currentTheme) {
    bodyElement.classList.add('light-theme')
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
    if (bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});
// Swiper
// test code