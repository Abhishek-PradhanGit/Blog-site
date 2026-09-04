// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// =========================
// CATEGORY FILTER
// =========================

const categoryButtons = document.querySelectorAll(".category-btn");
const blogCards = document.querySelectorAll(".blog-card");

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        blogCards.forEach(function (card) {

            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || category === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// =========================
// SEARCH BLOGS
// =========================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchBlogs() {

    const searchText = searchInput.value.toLowerCase().trim();

    blogCards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const category = card.querySelector(".blog-category").textContent.toLowerCase();

        if (
            title.includes(searchText) ||
            description.includes(searchText) ||
            category.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

searchBtn.addEventListener("click", searchBlogs);


// Search while typing
searchInput.addEventListener("input", searchBlogs);


// =========================
// READ MORE BUTTON
// =========================

const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".blog-card");

        const title = card.querySelector("h3").textContent;

        alert(
            "You selected:\n\n" +
            title +
            "\n\nFull blog article will be available soon!"
        );

    });

});


// =========================
// NEWSLETTER
// =========================

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    alert(
        "Thank you for subscribing!\n\n" +
        "Email: " + email
    );

    newsletterForm.reset();

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting us!\n\n" +
        "Your message has been received."
    );

    contactForm.reset();

});