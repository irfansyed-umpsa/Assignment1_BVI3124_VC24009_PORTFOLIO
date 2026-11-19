// =========================================================
// Personal Portfolio Interactive Script
// BVI3124 Assignment 1
// Name: SYED MUHAMMAD IRFAN BIN SYED ABD RAZIB
// =========================================================

console.log("script.js is connected!");

// 1. AUTO COPYRIGHT YEAR (Semua Page)
const yearText = document.querySelector("#year");
if (yearText) {
  yearText.textContent = new Date().getFullYear();
}

// 2. MOBILE MENU TOGGLE (Semua Page)
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    console.log("Menu button clicked");
  });
}

// 3. DARK / LIGHT MODE TOGGLE (Semua Page)
const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeBtn.textContent = "Light Mode";
    } else {
      themeBtn.textContent = "Dark Mode";
    }
  });
}

// 4. TIME-OF-DAY GREETING (index.html)
const greetingText = document.querySelector("#greeting");

if (greetingText) {
  const hour = new Date().getHours();

  if (hour < 12) {
    greetingText.textContent = "Good Morning! Welcome to my portfolio!";
  } else if (hour < 18) {
    greetingText.textContent = "Good Afternoon! Welcome to my portfolio!";
  } else {
    greetingText.textContent = "Good Evening! Welcome to my portfolio!";
  }
}

// 5. READ MORE TOGGLE (about.html)
const readMoreBtn = document.querySelector("#read-more-btn");
const extraBio = document.querySelector("#extra-bio");

if (readMoreBtn && extraBio) {
  readMoreBtn.addEventListener("click", function () {
    extraBio.classList.toggle("hidden");

    if (extraBio.classList.contains("hidden")) {
      readMoreBtn.textContent = "Read More";
    } else {
      readMoreBtn.textContent = "Show Less";
    }
  });
}

// 6. PROJECT CATEGORY FILTER (projects.html)
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-item");

if (filterButtons.length > 0) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // 1. Tukar semua butang jadi kelabu (btn-secondary), kemudian butang yang diklik jadi hijau
      filterButtons.forEach(function (b) {
        b.classList.add("btn-secondary");
      });
      btn.classList.remove("btn-secondary");

      // 2. Tapis kad projek mengikut kategori
      const selectedCategory = btn.getAttribute("data-category");

      projectCards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === cardCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 7. CONTACT FORM VALIDATION - COMPULSORY (contact.html)
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page from refreshing

    const nameInput = document.querySelector("#name").value.trim();
    const emailInput = document.querySelector("#email").value.trim();
    const subjectInput = document.querySelector("#subject").value.trim();
    const messageInput = document.querySelector("#msg-input").value.trim();
    const feedback = document.querySelector("#form-message");

    // Check if any field is empty
    if (nameInput === "" || emailInput === "" || subjectInput === "" || messageInput === "") {
      feedback.textContent = "Error: Please fill in all fields!";
      feedback.style.color = "#b91c1c";
      return;
    }

    // Check if email contains '@' and '.'
    if (!emailInput.includes("@") || !emailInput.includes(".")) {
      feedback.textContent = "Error: Please enter a valid email address!";
      feedback.style.color = "#b91c1c";
      return;
    }

    // Success message
    feedback.textContent = "Thank you, " + nameInput + "! Your message has been sent.";
    feedback.style.color = "#15803d";
    contactForm.reset();
  });
}

// 8. CERTIFICATE POP-UP MODAL (about.html)
const certButtons = document.querySelectorAll(".cert-btn");
const certModal = document.querySelector("#cert-modal");
const modalImg = document.querySelector("#modal-img");
const closeModalBtn = document.querySelector("#close-modal");

if (certButtons.length > 0 && certModal && modalImg) {
  // Bila mana-mana butang "View Certificate" diklik
  certButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const imagePath = btn.getAttribute("data-img");
      modalImg.src = imagePath;
      certModal.classList.add("show");
    });
  });

  // Tutup modal bila klik butang pangkah (✕)
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      certModal.classList.remove("show");
    });
  }

  // Tutup modal bila klik kawasan gelap di luar gambar
  certModal.addEventListener("click", function (event) {
    if (event.target === certModal) {
      certModal.classList.remove("show");
    }
  });
}