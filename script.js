window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled'); // Add background on scroll
    } else {
      navbar.classList.remove('scrolled'); // Remove background at the top
    }
  });

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    let hero = document.getElementById("hero").offsetHeight;

    if (window.scrollY > hero * 0.1) { 
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in, .fade-in-right, .fade-in-left").forEach((el) => observer.observe(el));
});


 document.addEventListener("DOMContentLoaded", function () {
    // Wait for the full page (including images) to load
     window.onload = function () {
        document.getElementById("preloader").style.display = "none";
        document.body.classList.remove("loading");
     };
});

window.addEventListener("scroll", function() {
    document.getElementById("popup").classList.add("hidden");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        console.log("Link clicked!");
        // event.preventDefault(); // Remove this unless needed
    });
});
  
