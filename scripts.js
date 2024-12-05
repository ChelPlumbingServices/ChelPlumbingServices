document.querySelectorAll('.feedback-card').forEach(card => {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'translateX(10px)';
    });

    card.addEventListener('mouseout', function () {
        card.style.transform = 'translateX(0)';
    });
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Add a fade-in effect when the page loads
    document.body.classList.add("fade-in");

    // Attach event listeners to all links for navigation
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            // Only apply animation if the link points to another page
            if (link.href && link.target !== "_blank" && !link.href.startsWith("#")) {
                event.preventDefault(); // Stop default navigation
                document.body.classList.add("fade-out"); // Start fade-out animation

                // Delay navigation to allow the fade-out animation to finish
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); // Match the duration of your CSS transition
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalText = document.getElementById('modal-text');

    // Select all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent; // Get title
            const details = card.dataset.details; // Get custom details from data-details

            // Update modal content
            modalText.innerHTML = `<strong>${title}</strong><br>${details}`;
            modal.classList.add('show');
        });
    });

    // Close modal on button click
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});

