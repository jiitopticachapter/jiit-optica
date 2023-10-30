let menu=document.querySelector(".menu");
menu.addEventListener('click', () => {
    menu.classList.toggle("active");
    menu.classList.remove("no-animation");
})