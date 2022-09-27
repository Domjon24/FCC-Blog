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

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper