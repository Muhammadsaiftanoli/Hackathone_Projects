const skillsButtn = document.querySelectorAll(".toggle_button")[0] as HTMLButtonElement;
const skillContainer = document.querySelectorAll(".skills")[0] as HTMLDivElement;



function toggleSkills() {
    if (skillContainer.style.display === "block") {
         skillContainer.style.display = "none";
         skillsButtn.textContent = "Show Skills";
    }
    else {
        skillContainer.style.display = "block";
        skillsButtn.textContent = "Hide Skills";
    }
}

skillsButtn.addEventListener("click", toggleSkills);