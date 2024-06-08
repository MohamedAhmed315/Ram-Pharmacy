// Set arrow direction for buttons
let dir = document.querySelector('html').getAttribute('dir');
let arrow_icon = document.querySelectorAll('.arrow');

if (dir == 'ltr') {
    arrow_icon.forEach(element => {
        element.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    });
}
else if (dir == 'rtl') {
    arrow_icon.forEach(element => {
        element.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    });
}