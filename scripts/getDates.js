


// Get the current year for copyright
const currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {

    // Output the last modified date
    const lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified} © ${currentYear}`;
});