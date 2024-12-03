var skillsButtn = document.querySelectorAll(".toggle_button")[0];
var skillContainer = document.querySelectorAll(".skills")[0];
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
