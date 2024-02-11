let currentTestimonial = 1;

function showTestimonial(index) {
    // Hide all testimonials
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`testimonial${i}`).style.display = 'none';
    }

    // Show the selected testimonial
    document.getElementById(`testimonial${index}`).style.display = 'block';
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial % 3) + 1;
    showTestimonial(currentTestimonial);
}

// Initial setup
showTestimonial(currentTestimonial);

// Auto-slide every 5 seconds (5000 milliseconds)
setInterval(nextTestimonial, 3000);


function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 2 + 3) % 3 + 1;
  showTestimonial(currentTestimonial);
}




