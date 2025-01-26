function swapColors() {
    const root = document.documentElement; // Select the :root element
    const white = getComputedStyle(root).getPropertyValue('--white'); // Get the current value of --white
    const black = getComputedStyle(root).getPropertyValue('--black'); // Get the current value of --black

    root.style.setProperty('--white', black); // Set --white to the value of --black
    root.style.setProperty('--black', white); // Set --black to the value of --white
}

let dark = true;
const theme = document.getElementById("theme");
const menu = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const modalLinks = document.querySelectorAll(".ham");

let close = false;

theme.addEventListener("click",()=>{
    theme.classList.add("bounce");

    theme.addEventListener("animationend",()=>{
        theme.classList.remove("bounce");
    });
    
    if(dark) {
        theme.innerHTML='<span class="material-symbols-outlined">dark_mode</span>';
    }else{
        theme.innerHTML='<span class="material-symbols-outlined">light_mode</span>';
    }
    swapColors();
    dark=!dark;
});

menu.addEventListener("click",()=>{

    menu.classList.add("bounce");

    menu.addEventListener("animationend",()=>{
        menu.classList.remove("bounce");
    });

    if(!close){
        modal.style.display = "flex";
        menu.innerHTML = "×";
        menu.style.zIndex = 3;
        document.getElementById("what").style.display = "none";
        modalLinks.forEach(element => {
            element.style.display = "block";
        });
    }else{
        modal.style.display = "none";
        menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        document.getElementById("what").style.display = "block";
    }

    close=!close;
    
});

modalLinks.forEach(element => {
    element.addEventListener("click",()=>{
        modal.style.display = "none";
        document.getElementById("what").style.display = "block";
        menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        close=!close;
    });
});