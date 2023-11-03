// script.js

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButtons = document.querySelectorAll("#readMoreBtn");

    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var newsContent = this.parentElement.querySelector(".news-content");
            var paragraph = document.createElement("p");
            paragraph.textContent = "Hi check our facebook page for more content."; // Add your additional content here

            // Toggle visibility of the news content
            if (newsContent.style.display === "none" || newsContent.style.display === "") {
                // Show news content and add the paragraph
                newsContent.style.display = "block";
                newsContent.appendChild(paragraph);
            } else {
                // Hide news content and remove the paragraph
                newsContent.style.display = "none";
                newsContent.removeChild(paragraph);
            }
        });
    });
});
