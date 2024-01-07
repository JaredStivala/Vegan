document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', event => {
        const card = button.parentElement;
        const topic = card.querySelector('h2').innerText;
        alert(`Learn more about ${topic}.`);
        // Ideally, replace this with a modal or a link to a detailed page.
    });
});
