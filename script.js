function swapColors() {
    const root = document.documentElement; // Select the :root element
    const white = getComputedStyle(root).getPropertyValue('--white'); // Get the current value of --white
    const black = getComputedStyle(root).getPropertyValue('--black'); // Get the current value of --black

    root.style.setProperty('--white', black); // Set --white to the value of --black
    root.style.setProperty('--black', white); // Set --black to the value of --white
}

let dark = true;

document.getElementById("theme").addEventListener("click",()=>{
    if(dark) {
        document.getElementById("theme").innerHTML='<span class="material-symbols-outlined">dark_mode</span>';
    }else{
        document.getElementById("theme").innerHTML='<span class="material-symbols-outlined">light_mode</span>';
    }
    swapColors();
    dark=!dark;
});