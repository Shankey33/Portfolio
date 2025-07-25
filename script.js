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

// Project section toggle
document.getElementById('projects').addEventListener('click', function(){
            Swal.fire({
                title: 'Projects Section',
                text: 'This section is under construction. Stay tuned for updates!',
                icon: 'info',
                confirmButtonText: 'Okay',
                background: "#0f0f2d",
                color: '#ff00ff',   
                confirmButtonColor: '#ff007f',
                iconColor: '#ff00ff',    
                customClass: {
                    popup: 'projects-popup',
                },
                didOpen: () =>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }         
            });
            
        })