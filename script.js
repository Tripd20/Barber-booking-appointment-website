
const form = document.getElementById('bookingForm');
const confirmation = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop page from reloading

  // Grab form values
  const name = form.name.value.trim();
  const service = form.service.value;
  const datetime = form.datetime.value;
  const phone = form.phone.value.trim();

  // Basic validation
  if (!name || !service || !datetime || !phone) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Simulate success (in real apps, send data to backend)
  confirmation.style.display = "block";
  confirmation.textContent = `✅ Appointment confirmed for ${name} on ${new Date(datetime).toLocaleString()}.`;

  // Optional: Reset form after submission
  form.reset();

  // Hide message after a few seconds
  setTimeout(() => {
    confirmation.style.display = "none";
  }, 5000);
});


document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting immediately

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const message = document.getElementById("formMessage");

    // Reset message
    message.textContent = "";
    message.style.color = "red";

    if (!name.value.trim() || !email.value.trim() || !phone.value.trim() || !date.value || !time.value) {
      message.textContent = "Please fill out all required fields.";
      return;
    }

    // Email validation (basic)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    // Phone number (basic: 10-15 digits)
    const phonePattern = /^\d{10,15}$/;
    if (!phone.value.match(phonePattern)) {
      message.textContent = "Please enter a valid phone number (10–15 digits).";
      return;
    }

    // Future date check
    const selectedDate = new Date(date.value);
    const now = new Date();
    if (selectedDate < now.setHours(0, 0, 0, 0)) {
      message.textContent = "Please select a future date.";
      return;
    }

    // Success message (simulate)
    message.style.color = "green";
    message.textContent = "Thanks! Your appointment request has been received.";
    // Optionally, reset form:
    this.reset();
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('invisible');
    observer.observe(section);
  });

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);



  AOS.init({
    duration: 1000, // animation duration
    easing: 'ease-in-out', // animation easing
    once: true // only animate once
  });




