const skillsButtn = document.querySelectorAll(".toggle_button")[0] as HTMLButtonElement;
const skillContainer = document.querySelectorAll(".skills")[0] as HTMLDivElement;



function toggleSkills() {
    if (skillContainer.style.display === "none") {
         skillContainer.style.display = "block";
         skillsButtn.textContent = "Hide Skills";
    }
    else {
        skillContainer.style.display = "none";
        skillsButtn.textContent = "Show Skills";
    }
}

skillsButtn.addEventListener("click", toggleSkills);