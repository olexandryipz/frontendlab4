const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
    title.addEventListener('click', function() {
        const content = title.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            closeAllContents();
            content.style.display = 'block';
        }
    });
});

function closeAllContents() {
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });
}
