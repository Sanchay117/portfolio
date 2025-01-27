function swapColors() {
    const root = document.documentElement; // Select the :root element
    const white = getComputedStyle(root).getPropertyValue('--white'); // Get the current value of --white
    const black = getComputedStyle(root).getPropertyValue('--black'); // Get the current value of --black
    const dBlack = getComputedStyle(root).getPropertyValue('--dark-black');
    const dWhite = getComputedStyle(root).getPropertyValue('--dark-white');

    root.style.setProperty('--white', black); // Set --white to the value of --black
    root.style.setProperty('--black', white); // Set --black to the value of --white
    root.style.setProperty('--dark-white', dBlack); // Set --white to the value of --black
    root.style.setProperty('--dark-black', dWhite); // Set --black to the value of --white
}

let dark = true;
const theme = document.getElementById("theme");
const menu = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const modalLinks = document.querySelectorAll(".ham");
const nav = document.getElementsByTagName("nav");

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

// resume btn

let animateButton = function(e) {
    e.preventDefault();
    // Reset the animation by removing the 'animate' class
    e.target.classList.remove('animate');
    
    // Trigger the animation by adding the 'animate' class again
    e.target.classList.add('animate');
};

// Select all buttons with the class 'bubbly-button'
let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
    // Add event listener for mouseenter (trigger animation)
    bubblyButtons[i].addEventListener('mouseenter', animateButton, false);

    // Add event listener for mouseleave (remove animation immediately when mouse leaves)
    bubblyButtons[i].addEventListener('mouseleave', function(e) {
        // Reset the animation immediately when the mouse leaves the button
        e.target.classList.remove('animate');
    }, false);

    // Use 'animationend' to ensure the animation class is removed when animation ends
    bubblyButtons[i].addEventListener('animationend', function(e) {
        // The animation is complete, remove the 'animate' class for next time
        e.target.classList.remove('animate');
    }, false);
}

function openResume() {
    window.open('2023478_SanchaySingh.pdf', '_blank');
}

function email() {
    const recipient = "sanchay072@gmail.com"; // Replace with your email
    const subject = "Contact from Your Portfolio"; // Optional: Customize the subject
    const body = "Hello, I'd like to get in touch."; // Optional: Customize the email body

    // Open the default email client
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Smooth scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
