var skillsButtn = document.querySelectorAll(".toggle_button")[0];
var skillContainer = document.querySelectorAll(".skills")[0];
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
