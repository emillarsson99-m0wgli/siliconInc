document.addEventListener("DOMContentLoaded", () => {
    const FAQboxes = document.querySelectorAll(".FAQ-box")

    FAQboxes.forEach(box => {
        box.addEventListener("click", () => {
        
            const valueNumber = box.getAttribute("data-value");
            const correspondingDescription = document.querySelector(`.FAQ-descriptions[data-value="${valueNumber}"]`);
            const isCurrentlyActive = box.classList.contains("active");

            FAQboxes.forEach( otherBox => {
                const otherValueNumber = otherBox.getAttribute("data-value");
                const otherDescription = document.querySelector(`.FAQ-descriptions[data-value="${otherValueNumber}"]`);
                otherBox.classList.remove("active");
                otherDescription.classList.remove("active");
            });
            if(!isCurrentlyActive) {
                box.classList.add("active");
                correspondingDescription.classList.add("active");
            }
        });
    });
});


const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkMode = localStorage.getItem('darkmode')

if(hasDarkMode == null) {
    if(window.matchMedia('(darkmode-switch: dark)').matches){
        enableDarkMode()
    }   else {
        disableDarkMode()
    }
}   else if(hasDarkMode === 'on') {
    enableDarkMode()
}   else if(hasDarkMode === 'off') {
    disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    }   else{
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})


function enableDarkMode () {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode () {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}