// Smooth Scrolling Script

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

//Project Link Open

document.querySelector("#project-01").addEventListener('click', function() {
    window.open("./Projects/Weather-App/Weather.html", "_blank");
});

document.querySelector("#project-02").addEventListener("click", function() {
    window.open("https://github.com/Shankey33/studentManagementSystem", "_blank");
})


document.querySelector("#project-03").addEventListener("click", function() {
    window.open("https://github.com/Shankey33/foodcraft", "_blank");
})
