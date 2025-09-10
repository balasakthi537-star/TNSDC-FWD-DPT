function showProjectDetails(title, description) {
    document.getElementById("project-title").innerHTML = title;
    document.getElementById("project-description").innerHTML = description;
    document.getElementById("project-modal").style.display = "block";
}

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("project-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("project-modal")) {
        document.getElementById("project-modal").style.display = "none";
    }
});